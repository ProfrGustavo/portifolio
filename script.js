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
    // Sortear 10 questões aleatórias
    selectedQuestions = getRandomQuestions(10);
    
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

// Sortear questões aleatórias
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
    
    // Construir HTML da questão
    let questionHTML = `<div class="question-text">${question.question}</div>`;
    questionHTML += '<div class="options">';
    
    question.options.forEach((option, optionIndex) => {
        const isChecked = userAnswers[index] === optionIndex ? 'checked' : '';
        questionHTML += `
            <label>
                <input type="radio" name="answer" value="${optionIndex}" ${isChecked} onchange="saveAnswer(${optionIndex})">
                <span>${option}</span>
            </label>
        `;
    });
    
    questionHTML += '</div>';
    questionElement.innerHTML = questionHTML;
    
    // Atualizar botões de navegação
    updateNavigationButtons();
}

// Salvar resposta
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
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;
    
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
        document.getElementById('timer').style.color = '#dc3545';
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
        if (userAnswers[index] === question.correct) {
            score++;
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
        const isCorrect = userAnswer === question.correct;
        const answerClass = isCorrect ? 'answer-correct' : 'answer-incorrect';
        
        reviewHTML += `
            <div class="answer-item ${answerClass}">
                <div class="question-text">${question.question}</div>
                <div class="user-answer">Sua resposta: ${question.options[userAnswer]}</div>
                ${!isCorrect ? `<div class="correct-answer">Resposta correta: ${question.options[question.correct]}</div>` : ''}
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
    
    // Mostrar tela de login
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('password').value = '';
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
            showCheatAlert();
        }
    });
    
    // Detecta perda de foco da janela
    window.addEventListener('blur', function() {
        if (!cheatDetected) {
            showCheatAlert();
            cheatDetected = true;
        }
    });

    // Bloqueia o botão direito do mouse com mensagem específica
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showRightClickAlert();
    });

    // Bloqueia alguns atalhos de teclado
    document.addEventListener('keydown', function(e) {
        // Ctrl+P, Ctrl+S, F12
        if ((e.ctrlKey && (e.key === 'p' || e.key === 's')) || e.key === 'F12') {
            e.preventDefault();
            if (!cheatDetected) {
                showCheatAlert();
                cheatDetected = true;
            }
        }
    });
}

// Mostrar alerta de trapaça (para sair da página)
function showCheatAlert() {
    const alert = document.getElementById('cheatAlert');
    alert.style.display = 'block';
    
    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        alert.style.display = alert.style.display === 'none' ? 'block' : 'none';
        blinkCount++;
        
        if (blinkCount >= 6) {
            clearInterval(blinkInterval);
            alert.style.display = 'block';
        }
    }, 300);
}

// Mostrar alerta específico para botão direito
function showRightClickAlert() {
    const alert = document.getElementById('rightClickAlert');
    alert.style.display = 'block';
    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 5000);
}

// Bloqueio de seleção de texto
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