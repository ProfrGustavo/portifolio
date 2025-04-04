document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const examContainer = document.getElementById('exam-container');
    const cheatModal = document.getElementById('cheat-modal');
    const cheatTimer = document.getElementById('cheat-timer');
    const passwordInput = document.getElementById('password-input');
    const passwordBtn = document.getElementById('password-btn');
    const submitBtn = document.getElementById('submit-btn');
    const answerKey = document.getElementById('answer-key');
    const keyBody = document.getElementById('key-body');
    const timerDisplay = document.getElementById('timer');
    
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
        {
            question: "3. Qual é o maior oceano da Terra?",
            options: [
                "a) Atlântico",
                "b) Índico",
                "c) Ártico",
                "d) Pacífico",
                "e) Antártico"
            ],
            correctAnswer: "d"
        },
        {
            question: "4. Quem pintou a Mona Lisa?",
            options: [
                "a) Vincent van Gogh",
                "b) Pablo Picasso",
                "c) Leonardo da Vinci",
                "d) Michelangelo",
                "e) Claude Monet"
            ],
            correctAnswer: "c"
        },
        {
            question: "5. Qual é o elemento químico com símbolo 'O'?",
            options: [
                "a) Ouro",
                "b) Ósmio",
                "c) Oxigênio",
                "d) Oganésson",
                "e) Óxido"
            ],
            correctAnswer: "c"
        },
        {
            question: "6. Em que ano o homem pisou na Lua pela primeira vez?",
            options: [
                "a) 1965",
                "b) 1969",
                "c) 1972",
                "d) 1958",
                "e) 1967"
            ],
            correctAnswer: "b"
        },
        {
            question: "7. Qual é o maior animal terrestre?",
            options: [
                "a) Elefante africano",
                "b) Girafa",
                "c) Baleia azul",
                "d) Dinossauro",
                "e) Rinoceronte"
            ],
            correctAnswer: "a"
        },
        {
            question: "8. Qual destes países não faz parte da Europa?",
            options: [
                "a) Suíça",
                "b) Noruega",
                "c) Argentina",
                "d) Grécia",
                "e) Finlândia"
            ],
            correctAnswer: "c"
        },
        {
            question: "9. Quantos lados tem um heptágono?",
            options: [
                "a) 5",
                "b) 6",
                "c) 7",
                "d) 8",
                "e) 9"
            ],
            correctAnswer: "c"
        },
        {
            question: "10. Qual é a fórmula química da água?",
            options: [
                "a) HO",
                "b) H2O",
                "c) H2O2",
                "d) H3O",
                "e) HO2"
            ],
            correctAnswer: "b"
        }
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
    
    // Verificar se o aluno está tentando colar
    function checkForCheating() {
        // Verifica se a janela perdeu o foco
        window.addEventListener('blur', function() {
            if (examStarted && !isCheating) {
                startCheatTimer();
            }
        });
        
        // Verifica se a janela foi minimizada
        document.addEventListener('visibilitychange', function() {
            if (document.hidden && examStarted && !isCheating) {
                startCheatTimer();
            }
        });
    }
    
    // Iniciar o timer de cola
    function startCheatTimer() {
        isCheating = true;
        cheatModal.style.display = 'flex';
        cheatTimeLeft = 5 * 60; // Reset para 5 minutos
        
        updateCheatTimerDisplay();
        
        cheatInterval = setInterval(function() {
            cheatTimeLeft--;
            updateCheatTimerDisplay();
            
            if (cheatTimeLeft <= 0) {
                clearInterval(cheatInterval);
                alert('Tempo esgotado! Você foi desqualificado por tentativa de cola.');
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
    
    // Mostrar gabarito
    function showAnswerKey() {
        keyBody.innerHTML = '';
        
        questions.forEach((q, index) => {
            const row = document.createElement('tr');
            
            const}