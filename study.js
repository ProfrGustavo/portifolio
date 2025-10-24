// study.js - Sistema Simples de Material de Estudo
function loadStudyMaterial() {
    const studyContent = document.getElementById('studyContent');
    studyContent.innerHTML = '';

    questionBank.forEach((question, index) => {
        const studyItem = document.createElement('div');
        studyItem.className = 'study-item';
        
        let questionHTML = `
            <div class="study-question">
                <strong>Questão ${index + 1}:</strong> ${question.question}
            </div>
        `;
        
        // Adicionar código se existir
        if (question.code) {
            questionHTML += `<div class="study-code">${question.code}</div>`;
        }
        
        // Adicionar opções para questões de múltipla escolha
        if (question.type === 'multiple') {
            question.options.forEach((option, optIndex) => {
                const isCorrect = optIndex === question.correct;
                const answerClass = isCorrect ? 'correct-option' : 'option';
                const letter = String.fromCharCode(65 + optIndex);
                questionHTML += `<div class="${answerClass}">${letter}) ${option}</div>`;
            });
        }
        
        // Adicionar resposta correta
        if (question.type === 'code') {
            questionHTML += `<div class="study-answer"><strong>Resposta:</strong> ${question.correct}</div>`;
        }
        
        studyItem.innerHTML = questionHTML;
        studyContent.appendChild(studyItem);
    });
}

function toggleStudyColumn() {
    const studyColumn = document.getElementById('studyColumn');
    const quizColumn = document.getElementById('quizColumn');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    studyColumn.classList.toggle('collapsed');
    quizColumn.classList.toggle('expanded');
    
    toggleBtns.forEach(btn => {
        if (studyColumn.classList.contains('collapsed')) {
            btn.textContent = '📚 Material';
        } else {
            btn.textContent = '◀️ Ocultar';
        }
    });
}

// Carregar material quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    loadStudyMaterial();
});