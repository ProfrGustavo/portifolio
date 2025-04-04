document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const examContainer = document.getElementById('exam-container');
    const cheatModal = document.getElementById('cheat-modal');
    const cheatTimer = document.getElementById('cheat-timer');
    const passwordInput = document.getElementById('password-input');
    const passwordBtn = document.getElementById('password-btn');
    
    const CORRECT_PASSWORD = '12071997';
    let cheatTimeLeft = 5 * 60; // 5 minutos em segundos
    let cheatInterval;
    let isCheating = false;
    let examStarted = false;
    
    // Questões de exemplo
    const questions = [
        {
            question: "1. Qual é a capital do Brasil?",
            options: [
                "a) Rio de Janeiro",
                "b) São Paulo",
                "c) Brasília",
                "d) Belo Horizonte",
                "e) Salvador"
            ],
            correctAnswer: "c"
        },
        {
            question: "2. Quantos planetas existem no sistema solar?",
            options: [
                "a) 7",
                "b) 8",
                "c) 9",
                "d) 10",
                "e) 6"
            ],
            correctAnswer: "b"
        },
        // Adicione mais questões conforme necessário
    ];
    
    // Carregar questões na página
    function loadQuestions() {
        questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = q.question;
            questionDiv.appendChild(questionTitle);
            
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            
            q.options.forEach(opt => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question-${index}`;
                input.value = opt.substring(0, 1);
                input.id = `q${index}-${opt.substring(0, 1)}`;
                
                // Marcar prova como iniciada quando responder
                input.addEventListener('change', function() {
                    if (!examStarted) {
                        examStarted = true;
                        startMonitoring();
                    }
                });
                
                const label = document.createElement('label');
                label.htmlFor = `q${index}-${opt.substring(0, 1)}`;
                label.textContent = opt;
                
                optionDiv.appendChild(input);
                optionDiv.appendChild(label);
                optionsDiv.appendChild(optionDiv);
            });
            
            questionDiv.appendChild(optionsDiv);
            examContainer.appendChild(questionDiv);
        });
    }
    
    // Iniciar monitoramento após a primeira resposta
    function startMonitoring() {
        // Verifica se a janela perdeu o foco
        window.addEventListener('blur', function() {
            if (!isCheating) {
                startCheatTimer();
            }
        });
        
        // Verifica se a janela foi minimizada
        document.addEventListener('visibilitychange', function() {
            if (document.hidden && !isCheating) {
                startCheatTimer();
            }
        });
        
        // Prevenir Ctrl+C, Ctrl+V
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            startCheatTimer();
        });
        
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            startCheatTimer();
        });
    }
    
    // Iniciar o timer de cola
    function startCheatTimer() {
        isCheating = true;
        cheatModal.style.display = 'flex';
        cheatTimeLeft = 5 * 60;
        
        updateCheatTimerDisplay();
        
        cheatInterval = setInterval(function() {
            cheatTimeLeft--;
            updateCheatTimerDisplay();
            
            if (cheatTimeLeft <= 0) {
                clearInterval(cheatInterval);
                alert('Tempo esgotado! Você foi desqualificado por sair da tela da prova.');
                location.reload();
            }
        }, 1000);
    }
    
    // Atualizar display do timer de cola
    function updateCheatTimerDisplay() {
        const minutes = Math.floor(cheatTimeLeft / 60);
        const seconds = cheatTimeLeft % 60;
        cheatTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Verificar a senha
    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            clearInterval(cheatInterval);
            cheatModal.style.display = 'none';
            isCheating = false;
            passwordInput.value = '';
        } else {
            alert('Senha incorreta!');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    // Event Listeners
    passwordBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Inicialização
    loadQuestions();
});