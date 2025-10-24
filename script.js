// Variáveis globais
let cheatDetected = false;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let timeLeft = 30 * 60; // 30 minutos em segundos
let timerInterval;

// Verificação de senha com regex
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    
    // Regex: começa com A (maiúsculo) e termina com 99
    const passwordRegex = /^A.*99$/;
    
    if (passwordRegex.test(password)) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('loadingContainer').style.display = 'block';
        
        // Pequeno delay para mostrar o loading
        setTimeout(() => {
            initializeQuiz();
        }, 1500);
        
    } else {
        errorMsg.style.display = 'block';
    }
}

// Inicializar o quiz
function initializeQuiz() {
    // Sortear 10 questões aleatórias balanceadas
    selectedQuestions = getRandomBalancedQuestions(10);
    
    // Inicializar array de respostas
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    // Mostrar quiz
    document.getElementById('loadingContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Iniciar monitoramento e timer
    startQuizMonitoring();
    startTimer();
    
    // Mostrar primeira questão
    showQuestion(0);
}

// Sortear questões aleatórias balanceadas (A, B, C, D distribuídas)
function getRandomBalancedQuestions(count) {
    // Embaralhar todas as questões
    const shuffledAll = [...questionBank].sort(() => 0.5 - Math.random());
    
    // Selecionar questões garantindo distribuição de respostas
    const selected = [];
    const answerCount = { A: 0, B: 0, C: 0, D: 0 };
    const targetPerAnswer = Math.ceil(count / 4);
    
    for (const question of shuffledAll) {
        if (selected.length >= count) break;
        
        const answerLetter = getAnswerLetter(question.correct);
        
        // Verificar se ainda precisamos desta letra de resposta
        if (answerCount[answerLetter] < targetPerAnswer) {
            selected.push(question);
            answerCount[answerLetter]++;
        }
    }
    
    // Se não conseguiu preencher com a distribuição ideal, completa com questões restantes
    if (selected.length < count) {
        const remaining = shuffledAll.filter(q => !selected.includes(q));
        for (let i = selected.length; i < count && remaining.length > 0; i++) {
            selected.push(remaining.shift());
        }
    }
    
    // Embaralhar novamente para misturar as letras de resposta
    return selected.sort(() => 0.5 - Math.random());
}

// Converter índice numérico para letra (0=A, 1=B, 2=C, 3=D)
function getAnswerLetter(index) {
    return String.fromCharCode(65 + index); // 65 = 'A' em ASCII
}

// Mostrar questão atual
function showQuestion(index) {
    currentQuestionIndex = index;
    const question = selectedQuestions[index];
    const questionElement = document.getElementById('currentQuestion');
    
    // Atualizar progresso
    document.getElementById('progress').textContent = `Questão ${index + 1}/${selectedQuestions.length}`;
    
    // Construir HTML da questão baseada no tipo
    let questionHTML = '';
    
    if (question.type === 'multiple') {
        questionHTML = buildMultipleChoiceHTML(question, index);
    } else if (question.type === 'code') {
        questionHTML = buildCodeCompletionHTML(question, index);
    }
    
    questionElement.innerHTML = questionHTML;
    
    // Atualizar botões de navegação
    updateNavigationButtons();
}

// Construir HTML para questões de múltipla escolha
function buildMultipleChoiceHTML(question, index) {
    let html = `<div class="question-text">${question.question}</div>`;
    html += '<div class="options">';
    
    question.options.forEach((option, optionIndex) => {
        const isChecked = userAnswers[index] === optionIndex ? 'checked' : '';
        const answerLetter = String.fromCharCode(65 + optionIndex); // A, B, C, D
        
        html += `
            <label>
                <input type="radio" name="answer" value="${optionIndex}" ${isChecked} onchange="saveAnswer(${optionIndex})">
                <span><strong>${answerLetter})</strong> ${option}</span>
            </label>
        `;
    });
    
    html += '</div>';
    return html;
}

// Construir HTML para questões de completar código
function buildCodeCompletionHTML(question, index) {
    let html = `<div class="question-text">${question.question}</div>`;
    
    // Processar o código para destacar a parte que deve ser completada
    const codeWithInput = question.code.replace('_____', 
        `<input type="text" 
                class="code-input" 
                id="codeInput-${index}" 
                value="${userAnswers[index] || ''}" 
                oninput="validateCodeAnswer(this, ${index})"
                placeholder="completar...">`
    );
    
    html += `<div class="code-container">${codeWithInput}</div>`;
    
    // Se já houver uma resposta e estiver correta, aplicar estilo
    if (userAnswers[index] && userAnswers[index] === question.correct) {
        const inputElement = document.getElementById(`codeInput-${index}`);
        if (inputElement) {
            inputElement.classList.add('correct');
        }
    }
    
    return html;
}

// Validar resposta de código em tempo real
function validateCodeAnswer(inputElement, questionIndex) {
    const userAnswer = inputElement.value.trim();
    const question = selectedQuestions[questionIndex];
    
    // Salvar resposta do usuário
    userAnswers[questionIndex] = userAnswer;
    
    // Verificar se está correta e aplicar estilo
    if (userAnswer.toLowerCase() === question.correct.toLowerCase()) {
        inputElement.classList.add('correct');
        
        // Atualizar também o timer se for a questão do timer verde
        if (question.correct === "#27ae60" && userAnswer.toLowerCase() === "#27ae60") {
            document.getElementById('timer').classList.add('correct');
        }
    } else {
        inputElement.classList.remove('correct');
        document.getElementById('timer').classList.remove('correct');
    }
    
    updateNavigationButtons();
}

// Salvar resposta (para múltipla escolha)
function saveAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    updateNavigationButtons();
}

// Atualizar botões de navegação
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Botão anterior
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Botão próximo/submit
    const hasAnswer = userAnswers[currentQuestionIndex] !== null && 
                     userAnswers[currentQuestionIndex] !== '';
    
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        submitBtn.disabled = !hasAnswer;
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = !hasAnswer;
    }
}

// Navegar para próxima questão
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

// Navegar para questão anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// Timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Mudar cor quando o tempo estiver acabando
    if (timeLeft < 300) { // 5 minutos
        document.getElementById('timer').style.color = '#e74c3c';
        document.getElementById('timer').style.animation = 'pulse 1s infinite';
    }
}

// Submissão do quiz
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calcular pontuação
    const score = calculateScore();
    const timeUsed = 30 * 60 - timeLeft;
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;
    
    // Mostrar resultado
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    
    document.getElementById('score').textContent = `${score}/${selectedQuestions.length}`;
    document.getElementById('timeInfo').textContent = 
        `Tempo utilizado: ${minutesUsed}min ${secondsUsed}s`;
    
    showAnswersReview();
}

// Calcular pontuação
function calculateScore() {
    let score = 0;
    selectedQuestions.forEach((question, index) => {
        if (question.type === 'multiple') {
            if (userAnswers[index] === question.correct) {
                score++;
            }
        } else if (question.type === 'code') {
            if (userAnswers[index] && 
                userAnswers[index].toLowerCase() === question.correct.toLowerCase()) {
                score++;
            }
        }
    });
    return score;
}

// Mostrar revisão de respostas
function showAnswersReview() {
    const reviewElement = document.getElementById('answersReview');
    let reviewHTML = '<h3>Revisão das suas respostas:</h3>';
    
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        let correctAnswer = '';
        
        if (question.type === 'multiple') {
            isCorrect = userAnswer === question.correct;
            userAnswerText = question.options[userAnswer];
            correctAnswer = question.options[question.correct];
        } else if (question.type === 'code') {
            isCorrect = userAnswer && userAnswer.toLowerCase() === question.correct.toLowerCase();
            userAnswerText = userAnswer || '(não respondido)';
            correctAnswer = question.correct;
        }
        
        const answerClass = isCorrect ? 'answer-correct' : 'answer-incorrect';
        
        reviewHTML += `
            <div class="answer-item ${answerClass}">
                <div class="question-text">${question.question}</div>
                <div class="user-answer">Sua resposta: ${userAnswerText}</div>
                ${!isCorrect ? `<div class="correct-answer">Resposta correta: ${correctAnswer}</div>` : ''}
            </div>
        `;
    });
    
    reviewElement.innerHTML = reviewHTML;
}

// Reiniciar quiz
function restartQuiz() {
    // Resetar variáveis
    selectedQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 30 * 60;
    cheatDetected = false;
    
    // Mostrar tela de login
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('password').value = '';
    document.getElementById('errorMsg').style.display = 'none';
}

// Permitir Enter para enviar a senha
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Monitoramento de segurança
function startQuizMonitoring() {
    // Detecta quando o usuário muda de aba
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && !cheatDetected) {
            showCheatAlert();
            cheatDetected = true;
        }
    });
    
    // Detecta quando o usuário tenta sair da página
    window.addEventListener('beforeunload', function(e) {
        if (!cheatDetected) {
            const message = 'Trapaça detectada! O quiz será finalizado.';
            e.returnValue = message;
            return message;
        }
    });
    
    // Detecta perda de foco da janela
    window.addEventListener('blur', function() {
        if (!cheatDetected) {
            showCheatAlert();
            cheatDetected = true;
        }
    });

    // Bloqueia o botão direito do mouse
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showRightClickAlert();
    });

    // Bloqueia atalhos de teclado
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey && (e.key === 'p' || e.key === 's')) || 
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            if (!cheatDetected) {
                showCheatAlert();
                cheatDetected = true;
            }
        }
    });
}

// Mostrar alerta de trapaça
function showCheatAlert() {
    const alert = document.getElementById('cheatAlert');
    alert.style.display = 'block';
    
    setTimeout(() => {
        submitQuiz();
    }, 2000);
}

// Mostrar alerta de botão direito
function showRightClickAlert() {
    const alert = document.getElementById('rightClickAlert');
    alert.style.display = 'block';
    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// Bloqueio de seleção e cópia
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// Adicionar animação de pulso para o timer
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Focar no campo de senha
    document.getElementById('password').focus();
});