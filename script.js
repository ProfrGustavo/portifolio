// Variáveis globais
let cheatDetected = false;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;
let timeLeft = 45 * 60; // 45 minutos em segundos - CORRIGIDO
let timerInterval;
let finalScore = 0;

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
    // Sortear 15 questões aleatórias - CORRIGIDO: usando getRandomQuestions
    selectedQuestions = getRandomQuestions(15);
    
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

// Sortear questões aleatórias - FUNÇÃO CORRIGIDA
function getRandomQuestions(count) {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
    const codeWithInput = question.code.replace('___________', 
        `<input type="text" 
                class="code-input" 
                id="codeInput-${index}" 
                value="${userAnswers[index] || ''}" 
                oninput="saveCodeAnswer(${index})"
                placeholder="completar...">`
    );
    
    html += `<div class="code-container">${codeWithInput}</div>`;
    
    return html;
}

// Salvar resposta de código
function saveCodeAnswer(questionIndex) {
    const inputElement = document.getElementById(`codeInput-${questionIndex}`);
    const userAnswer = inputElement.value.trim();
    
    // Salvar resposta do usuário
    userAnswers[questionIndex] = userAnswer;
    
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

// Timer - CORRIGIDO para 45 minutos
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

// Submissão do quiz - CORRIGIDO cálculo do tempo
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calcular pontuação
    finalScore = calculateScore();
    const timeUsed = 45 * 60 - timeLeft; // 45 minutos
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;
    
    // Mostrar resultado
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    
    document.getElementById('score').textContent = `${finalScore}/${selectedQuestions.length}`;
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
            userAnswerText = userAnswer !== null ? question.options[userAnswer] : '(não respondido)';
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
    
    // Adicionar botão de enviar resultado
    reviewHTML += `
        <div class="email-section">
            <button onclick="sendResultToTeacher()" class="email-btn">
                📧 Enviar Resultado para Professor
            </button>
        </div>
    `;
    
    reviewElement.innerHTML = reviewHTML;
}

// Função para enviar resultado para o professor
function sendResultToTeacher() {
    const score = document.getElementById('score').textContent;
    const timeInfo = document.getElementById('timeInfo').textContent;
    const teacherEmail = "de.medeiros.gustavo@escola.pr.gov.br";
    
    // Criar resumo das respostas
    let answersSummary = "Resumo das respostas:\\n\\n";
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let userAnswerText = '';
        
        if (question.type === 'multiple') {
            userAnswerText = question.options[userAnswer] || '(não respondido)';
        } else if (question.type === 'code') {
            userAnswerText = userAnswer || '(não respondido)';
        }
        
        answersSummary += `Q${index + 1}: ${userAnswerText}\\n`;
    });
    
    // Criar link mailto
    const subject = `Resultado do Quiz - ${score}`;
    const body = `Olá Professor!\\n\\nSegue meu resultado no quiz de programação:\\n\\nPontuação: ${score}\\n${timeInfo}\\n\\n${answersSummary}\\n\\nAtt.`;
    
    const mailtoLink = `mailto:${teacherEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir cliente de email
    window.location.href = mailtoLink;
}

// Reiniciar quiz - CORRIGIDO para 45 minutos
function restartQuiz() {
    // Resetar variáveis
    selectedQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 45 * 60; // 45 minutos
    cheatDetected = false;
    finalScore = 0;
    
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
    
    .email-section {
        margin-top: 20px;
        text-align: center;
        padding: 20px;
        border-top: 2px solid #3498db;
    }
    
    .email-btn {
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .email-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(39, 174, 96, 0.4);
    }
    
    .code-container {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        font-family: 'Courier New', monospace;
        margin: 15px 0;
    }
    
    .code-input {
        background: #fff;
        border: 2px solid #3498db;
        border-radius: 4px;
        padding: 5px 10px;
        font-family: 'Courier New', monospace;
        min-width: 100px;
    }
    
    .code-input.correct {
        border-color: #27ae60;
        background: #d4edda;
    }
`;
document.head.appendChild(style);

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Focar no campo de senha
    document.getElementById('password').focus();
});