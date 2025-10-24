// study.js - Sistema de Material de Estudo
class StudyMaterial {
    constructor() {
        this.questions = [];
        this.currentFilter = '';
        this.isVisible = true;
        this.init();
    }

    init() {
        this.loadStudyMaterial();
        this.setupEventListeners();
    }

    loadStudyMaterial() {
        const studyContent = document.getElementById('studyContent');
        studyContent.innerHTML = '';

        questionBank.forEach((question, index) => {
            const studyItem = this.createStudyItem(question, index);
            studyContent.appendChild(studyItem);
        });
    }

    createStudyItem(question, index) {
        const studyItem = document.createElement('div');
        studyItem.className = 'study-item fade-in';
        studyItem.setAttribute('data-index', index);
        
        let questionHTML = `
            <div class="study-question">
                <strong>Questão ${index + 1}:</strong> ${question.question}
            </div>
        `;
        
        // Adicionar código se existir
        if (question.code) {
            const highlightedCode = question.code.replace('_____', '<span class="code-blank">_____</span>');
            questionHTML += `<div class="study-code">${highlightedCode}</div>`;
        }
        
        // Adicionar opções para questões de múltipla escolha
        if (question.type === 'multiple') {
            questionHTML += '<div class="study-options">';
            question.options.forEach((option, optIndex) => {
                const isCorrect = optIndex === question.correct;
                const answerClass = isCorrect ? 'correct-option' : 'option';
                const letter = String.fromCharCode(65 + optIndex);
                questionHTML += `<div class="${answerClass}">${letter}) ${option}</div>`;
            });
            questionHTML += '</div>';
        }
        
        // Adicionar resposta correta
        if (question.type === 'code') {
            questionHTML += `<div class="study-answer">💡 Resposta correta: <code>${question.correct}</code></div>`;
        }
        
        // Adicionar explicação
        questionHTML += `
            <div class="study-explanation">
                <strong>📝 Explicação:</strong> ${this.getQuestionExplanation(question, index)}
            </div>
        `;
        
        // Adicionar tags
        questionHTML += `<div class="study-tags">${this.getQuestionTags(question)}</div>`;
        
        studyItem.innerHTML = questionHTML;
        return studyItem;
    }

    getQuestionExplanation(question, index) {
        const explanations = {
            // Questões de CSS
            0: "A cor verde em CSS pode ser representada por nomes ('green'), códigos hexadecimais ('#27ae60'), RGB ('rgb(39, 174, 96)') ou HSL. O código hexadecimal #27ae60 é uma cor verde específica.",
            3: "CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas web, controlando layout, cores, fontes e outros aspectos visuais.",
            16: "A propriedade 'color' define a cor do texto, enquanto 'background-color' define a cor de fundo. Valores podem ser nomes, hex, RGB, HSL.",
            39: "'padding' controla o espaço interno de um elemento, enquanto 'margin' controla o espaço externo.",
            45: "Selectors CSS: '.' para classes, '#' para IDs, nome da tag para elementos. Ex: '.classe', '#id', 'div'.",

            // Questões de HTML
            2: "A tag <a> (anchor) cria links. O atributo 'href' define o destino. Ex: <a href='url'>texto</a>.",
            14: "A tag <script> inclui JavaScript. Pode ser inline ou externo com 'src'. <script src='arquivo.js'></script>",
            41: "<ul> cria listas não ordenadas (com marcadores), <ol> lista ordenada (numerada), <li> itens da lista.",
            44: "O evento 'onload' é disparado quando a página e todos os recursos são carregados.",

            // Questões de JavaScript Básico
            1: "'return' retorna um valor da função. Sem return, a função retorna 'undefined'.",
            4: "Arrays são criados com [] ou new Array(). Podem conter qualquer tipo de dado.",
            5: "Loops 'for' repetem código. Estrutura: for(inicialização; condição; incremento) { código }",
            8: "'let' e 'const' são formas modernas de declarar variáveis. 'var' é a forma antiga.",
            11: "Operadores aritméticos: + (soma), - (subtração), * (multiplicação), / (divisão), % (módulo).",
            12: "Métodos de array: push() (adiciona no final), pop() (remove do final), shift() (remove do início), unshift() (adiciona no início).",
            13: "Objetos são coleções de pares chave-valor. Criados com {} ou new Object().",
            18: "Métodos de string: toUpperCase() (maiúsculas), toLowerCase() (minúsculas), trim() (remove espaços).",
            24: "Destructuring permite extrair valores de arrays ou objetos em variáveis separadas.",
            31: "Template strings (usando crase `) permitem interpolação de variáveis com ${} e strings multilinha.",
            34: "Módulos ES6: 'import' para importar, 'export' para exportar funcionalidades.",
            36: "Métodos de array: toString() (converte para string), join() (une elementos com separador).",
            42: "Arrow functions: sintaxe concisa, não tem seu próprio 'this'. Ex: const soma = (a, b) => a + b;",
            46: "Spread operator (...) expande arrays ou objetos. Útil para copiar, combinar.",

            // Questões de JavaScript Avançado
            6: "=== compara valor E tipo, == só compara valor (faz coerção de tipo). Prefira ===.",
            9: "Métodos DOM: getElementById() (por ID), querySelector() (por seletor CSS), getElementsByClassName() (por classe).",
            15: "Eventos DOM: 'click', 'mouseover', 'keydown'. addEventListener() para registrar handlers.",
            19: "Promises representam operações assíncronas. Estados: pending, fulfilled, rejected.",
            22: "React Hooks: useState (estado), useEffect (efeitos colaterais), useContext (contexto).",
            26: "Fetch API para requisições HTTP. Retorna Promise. response.json() para converter JSON.",
            27: "JSON: JSON.parse() (string para objeto), JSON.stringify() (objeto para string).",
            28: "async/await: sintaxe para trabalhar com Promises de forma síncrona.",
            37: "setTimeout executa função após delay (ms). setInterval repete a cada intervalo.",
            43: "try/catch para tratamento de erros. finally executa independente de sucesso/erro.",

            // Questões de Conceitos Gerais
            7: "Estruturas de dados: Pilha (LIFO - Last In First Out), Fila (FIFO - First In First Out).",
            10: "Comentários: // para linha única, /* */ para múltiplas linhas.",
            17: "Git: pull (baixa e integra), push (envia), commit (salva), clone (copia repositório).",
            20: "Math: round() (arredonda), floor() (arredonda para baixo), ceil() (arredonda para cima).",
            23: "Expressões regulares (Regex): padrões para busca e manipulação de texto.",
            29: "Date: manipulação de datas e horas. new Date() cria objeto com data/hora atual.",
            30: "Map: estrutura chave-valor. Melhor que objeto para chaves dinâmicas.",
            32: "Operador módulo (%) retorna resto da divisão. Útil para verificar paridade, ciclos.",
            35: "Sort: ordena arrays. Pode receber função de comparação para ordenação customizada.",
            38: "Boolean: representa true ou false. Operadores: && (AND), || (OR), ! (NOT).",
            40: "Find vs Filter: find retorna primeiro elemento que satisfaz condição, filter retorna todos.",
            47: "Classes: sintaxe ES6 para OOP. constructor para inicialização, métodos para comportamento.",
            48: "Length: propriedade de arrays e strings que retorna o número de elementos/caracteres.",
            49: "Typeof: operador que retorna o tipo de uma variável. Ex: typeof 'hello' → 'string'."
        };

        return explanations[index] || "Esta questão aborda conceitos fundamentais de programação que são essenciais para seu desenvolvimento como programador.";
    }

    getQuestionTags(question) {
        const tags = [];
        
        if (question.type === 'code') {
            tags.push('completar-código');
        } else {
            tags.push('múltipla-escolha');
        }

        if (question.question.includes('CSS') || question.code?.includes('color') || question.correct === '#27ae60') {
            tags.push('css');
        }
        if (question.question.includes('HTML') || question.question.includes('tag')) {
            tags.push('html');
        }
        if (question.question.includes('JavaScript') || question.question.includes('JS') || 
            question.code?.includes('function') || question.code?.includes('console.log')) {
            tags.push('javascript');
        }
        if (question.question.includes('React')) {
            tags.push('react');
        }
        if (question.question.includes('Git')) {
            tags.push('git');
        }
        if (question.question.includes('array') || question.code?.includes('[]')) {
            tags.push('arrays');
        }
        if (question.question.includes('função') || question.code?.includes('function')) {
            tags.push('funções');
        }
        if (question.question.includes('DOM')) {
            tags.push('dom');
        }

        return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }

    filterQuestions() {
        const searchTerm = document.getElementById('studySearch').value.toLowerCase();
        const studyItems = document.querySelectorAll('.study-item');
        
        studyItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const tags = item.querySelector('.study-tags')?.textContent.toLowerCase() || '';
            
            if (text.includes(searchTerm) || tags.includes(searchTerm)) {
                item.style.display = 'block';
                // Destacar termo buscado
                this.highlightSearchTerm(item, searchTerm);
            } else {
                item.style.display = 'none';
            }
        });
    }

    highlightSearchTerm(element, term) {
        if (!term) return;
        
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;
            
            if (parent && !parent.classList.contains('study-code') && 
                !parent.classList.contains('study-answer')) {
                const text = node.textContent;
                const regex = new RegExp(`(${this.escapeRegex(term)})`, 'gi');
                const newText = text.replace(regex, '<mark>$1</mark>');
                
                if (newText !== text) {
                    const newElement = document.createElement('span');
                    newElement.innerHTML = newText;
                    parent.replaceChild(newElement, node);
                }
            }
        }
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    toggleStudyColumn() {
        const studyColumn = document.getElementById('studyColumn');
        const quizColumn = document.getElementById('quizColumn');
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        
        this.isVisible = !this.isVisible;
        studyColumn.classList.toggle('collapsed');
        quizColumn.classList.toggle('expanded');
        
        toggleBtns.forEach(btn => {
            if (this.isVisible) {
                btn.textContent = '◀️ Ocultar Material';
            } else {
                btn.textContent = '📚 Mostrar Material';
            }
        });
    }

    setupEventListeners() {
        // Busca em tempo real
        document.getElementById('studySearch').addEventListener('input', () => {
            this.filterQuestions();
        });

        // Botões de toggle
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.toggleStudyColumn();
            });
        });

        // Tecla ESC para ocultar/material
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.toggleStudyColumn();
            }
        });
    }

    // Método para navegação rápida entre questões
    scrollToQuestion(index) {
        const studyItem = document.querySelector(`.study-item[data-index="${index}"]`);
        if (studyItem) {
            studyItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            studyItem.style.animation = 'pulse 2s';
            setTimeout(() => {
                studyItem.style.animation = '';
            }, 2000);
        }
    }

    // Método para exportar material de estudo
    exportStudyMaterial() {
        const studyContent = document.getElementById('studyContent').innerText;
        const blob = new Blob([studyContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'material-estudo-programacao.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Inicializar o material de estudo quando a página carregar
let studyMaterial;

document.addEventListener('DOMContentLoaded', function() {
    studyMaterial = new StudyMaterial();
});