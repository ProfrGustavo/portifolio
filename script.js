// Variável para controlar se já detectou trapaça
let cheatDetected = false;

// Verificação de senha com regex
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    
    // Regex: começa com A (maiúsculo) e termina com 99
    const passwordRegex = /^A.*99$/;
    
    if (passwordRegex.test(password)) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';
        startQuizMonitoring();
    } else {
        errorMsg.style.display = 'block';
    }
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
            // Não impede a saída, apenas mostra alerta
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
        if (!cheatDetected) {
            showCheatAlert();
            cheatDetected = true;
        }
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

// Mostrar alerta de trapaça
function showCheatAlert() {
    const alert = document.getElementById('cheatAlert');
    alert.style.display = 'block';
    
    // Faz o alerta piscar
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

// Submissão do quiz
function submitQuiz() {
    // Verifica se todas as questões foram respondidas
    const allAnswered = checkAllQuestionsAnswered();
    
    if (allAnswered) {
        alert('Quiz enviado com sucesso! Em breve você receberá o resultado.');
        // Aqui você pode adicionar a lógica para calcular a pontuação
    } else {
        alert('Por favor, responda todas as questões antes de enviar!');
    }
}

// Verifica se todas as questões foram respondidas
function checkAllQuestionsAnswered() {
    for (let i = 1; i <= 10; i++) {
        const questionName = 'q' + i;
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        if (!selected) {
            return false;
        }
    }
    return true;
}

// Bloqueio de seleção de texto
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('copy', function(e) {
    e.preventDefault();
});