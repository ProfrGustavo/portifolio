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
    
    // Questões de exemplo (você pode substituir por suas próprias questões)
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
    
    // Função para carregar as questões na página
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
                input.value = opt.substring(0, 1); // Pega a letra (a, b, c, etc.)
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
    
    // Função para verificar se o aluno está tentando colar
    function checkForCheating() {
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
    }
    
    // Função para iniciar o timer de cola
    function startCheatTimer() {
        isCheating = true;
        cheatModal.style.display = 'flex';
        cheatTimeLeft = 5 * 60; // Reset para 5 minutos
        
        cheatInterval = setInterval(function() {
            cheatTimeLeft--;
            
            const minutes = Math.floor(cheatTimeLeft / 60);
            const seconds = cheatTimeLeft % 60;
            
            cheatTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (cheatTimeLeft <= 0) {
                clearInterval(cheatInterval);
                // Aqui você pode adicionar ações quando o tempo acabar, como desqualificar o aluno
                alert('Tempo esgotado! Você foi desqualificado por tentativa de cola.');
                // Recarregar a página ou tomar outras ações
                location.reload();
            }
        }, 1000);
    }
    
    // Função para verificar a senha
    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            clearInterval(cheatInterval);
            cheatModal.style.display = 'none';
            isCheating = false;
            passwordInput.value = '';
        } else {
            alert('Senha incorreta!');
        }
    }
    
    // Função para mostrar o gabarito
    function showAnswerKey() {
        keyBody.innerHTML = '';
        
        questions.forEach((q, index) => {
            const row = document.createElement('tr');
            
            const cellQuestion = document.createElement('td');
            cellQuestion.textContent = index + 1;
            
            const cellAnswer = document.createElement('td');
            cellAnswer.textContent = q.correctAnswer.toUpperCase();
            
            row.appendChild(cellQuestion);
            row.appendChild(cellAnswer);
            keyBody.appendChild(row);
        });
        
        answerKey.style.display = 'block';
    }
    
    // Função para calcular o tempo restante (opcional)
    function startExamTimer() {
        // Você pode implementar um timer para a prova completa se desejar
        // Esta é apenas uma demonstração
        let seconds = 0;
        
        setInterval(function() {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            timerDisplay.textContent = `Tempo: ${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    // Event Listeners
    passwordBtn.addEventListener('click', checkPassword);
    
    submitBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja enviar a prova? Não será possível alterar as respostas depois.')) {
            showAnswerKey();
            // Aqui você pode adicionar lógica para enviar as respostas para um servidor
            alert('Prova enviada com sucesso!');
        }
    });
    
    // Inicialização
    loadQuestions();
    checkForCheating();
    startExamTimer();
    
    // Permitir enviar a senha pressionando Enter
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});