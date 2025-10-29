// study.js - Material de Referência Educacional Completo
const studyMaterial = {
    "css-cores": {
        title: "🎨 CSS - Cores e Propriedades",
        content: `CSS (Cascading Style Sheets) é usado para estilizar páginas web.

📌 Sistema de Cores no CSS:
• Nomes: red, blue, green, black, white
• Hexadecimal: #27ae60 (verde), #dc3545 (vermelho)
• RGB: rgb(39, 174, 96)
• HSL: hsl(145, 63%, 42%)

📌 Propriedades de Texto:
color: #27ae60;              /* Cor do texto */
font-size: 24px;             /* Tamanho da fonte */
font-weight: bold;           /* Peso da fonte (negrito) */
text-align: center;          /* Alinhamento do texto */

📌 Box Model:
padding: 10px 20px;          /* Espaçamento interno */
margin: 15px;                /* Espaçamento externo */
border: 2px solid #dc3545;   /* Borda */
border-radius: 5px;          /* Cantos arredondados */
background: #ffffff;         /* Cor de fundo */

📌 Exemplo Completo:
.timer {
    color: #27ae60;          /* VERDE - cor do texto */
    font-size: 24px;
    font-weight: bold;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: 2px solid #dc3545;
}`
    },
    "javascript-funcoes": {
        title: "⚡ JavaScript - Funções",
        content: `Funções são blocos de código reutilizáveis que realizam tarefas específicas.

📌 Estrutura Básica:
function nomeDaFuncao(parametro1, parametro2) {
    // Código a ser executado
    return resultado;  // Retorna um valor
}

📌 Palavra-chave RETURN:
• return para devolver um valor
• Sem return, a função retorna undefined
• return encerra a execução da função

📌 Exemplos:
function soma(a, b) {
    return a + b;  // ← RETORNA a soma
}

let resultado = soma(5, 3);  // resultado = 8

function saudacao(nome) {
    console.log("Olá " + nome);
    // Sem return → retorna undefined
}

📌 Arrow Functions (Moderna):
const soma = (a, b) => a + b;
const quadrado = x => x * x;`
    },
    "html-links": {
        title: "🌐 HTML - Links e Tags",
        content: `HTML (HyperText Markup Language) define a estrutura das páginas web.

📌 Tag de Link - <a>:
<a href="https://exemplo.com">Texto do Link</a>

• href: especifica o destino do link
• Pode ser URL absoluta ou relativa
• Pode abrir em nova aba com target="_blank"

📌 Tags Principais:
• <a> - links (anchor)
• <script> - incluir JavaScript
• <link> - para arquivos CSS (NÃO para links)
• <img> - imagens
• <div> - divisão/container

📌 Exemplos Corretos:
<!-- Link para site externo -->
<a href="https://google.com">Ir para Google</a>

<!-- Link para página interna -->
<a href="sobre.html">Sobre Nós</a>

<!-- Incluir JavaScript -->
<script src="meu-script.js"></script>

📌 ATENÇÃO:
• <a> é para LINKS de navegação
• <link> é para RECURSOS (CSS, ícones)
• <script> é para CÓDIGO JavaScript`
    },
    "javascript-arrays": {
        title: "📊 JavaScript - Arrays",
        content: `Arrays são estruturas que armazenam coleções de dados.

📌 Criando Arrays:
let vazio = [];                    // Array vazio
let numeros = [1, 2, 3, 4, 5];     // Array com números
let misto = [1, "texto", true];    // Tipos mistos

📌 Métodos de Array - ADICIONAR/REMOVER:
• push()    - Adiciona no FINAL
• pop()     - Remove do FINAL
• unshift() - Adiciona no INÍCIO  
• shift()   - Remove do INÍCIO

📌 Exemplos:
let frutas = ["maçã", "banana"];
frutas.push("laranja");     // ["maçã", "banana", "laranja"]
frutas.pop();               // ["maçã", "banana"]
frutas.unshift("uva");      // ["uva", "maçã", "banana"]
frutas.shift();             // ["maçã", "banana"]

📌 Tamanho do Array:
let tamanho = frutas.length;  // Retorna 2`
    },
    "css-linguagem": {
        title: "🎨 CSS - O que é CSS",
        content: `📌 CSS significa: Cascading Style Sheets
(Folhas de Estilo em Cascata)

📌 O que faz o CSS?
• Controla a APARÊNCIA visual das páginas
• Define cores, fontes, layouts, espaçamentos
• Separa o ESTILO do CONTEÚDO (HTML)

📌 Linguagens da Web:
• HTML: Estrutura e conteúdo
• CSS: Estilo e aparência  
• JavaScript: Comportamento e interatividade

📌 Exemplo de Aplicação:
<!-- HTML -->
<button class="botao">Clique aqui</button>

/* CSS */
.botao {
    background: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

📌 Vantagens do CSS:
• Reutilização de estilos
• Manutenção facilitada
• Sites mais rápidos
• Design consistente`
    }
};

// Função para carregar o material de estudo
function loadStudyMaterial() {
    const studyContent = document.getElementById('studyContent');
    
    if (!studyContent) {
        console.error('Elemento studyContent não encontrado!');
        return;
    }
    
    // Criar menu de tópicos
    let studyHTML = `
        <div class="topic-menu">
            <h3>📚 Tópicos de Estudo</h3>
            <div class="topic-buttons">
                <button class="topic-btn active" onclick="showTopic('css-cores')">CSS Cores</button>
                <button class="topic-btn" onclick="showTopic('javascript-funcoes')">Funções JS</button>
                <button class="topic-btn" onclick="showTopic('html-links')">HTML Links</button>
                <button class="topic-btn" onclick="showTopic('javascript-arrays')">Arrays</button>
                <button class="topic-btn" onclick="showTopic('css-linguagem')">O que é CSS</button>
            </div>
        </div>
        <div class="topic-content" id="topicContent">
            <div class="topic-header">
                <h2>🎨 CSS - Cores e Propriedades</h2>
            </div>
            <div class="topic-body">
                <pre>${studyMaterial['css-cores'].content}</pre>
            </div>
        </div>
    `;
    
    studyContent.innerHTML = studyHTML;
    console.log('Material de estudo carregado com sucesso!');
}

// Função para mostrar um tópico específico
function showTopic(topicKey) {
    const topic = studyMaterial[topicKey];
    if (!topic) {
        console.error('Tópico não encontrado:', topicKey);
        return;
    }
    
    const topicContent = document.getElementById('topicContent');
    if (!topicContent) {
        console.error('Elemento topicContent não encontrado!');
        return;
    }
    
    // Atualizar botões ativos
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Marcar botão atual como ativo (se o event estiver disponível)
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Atualizar conteúdo
    topicContent.innerHTML = `
        <div class="topic-header">
            <h2>${topic.title}</h2>
        </div>
        <div class="topic-body">
            <pre>${topic.content}</pre>
        </div>
    `;
}

// Função para alternar a coluna de estudo
function toggleStudyColumn() {
    const studyColumn = document.getElementById('studyColumn');
    const quizColumn = document.getElementById('quizColumn');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    
    if (!studyColumn || !quizColumn) {
        console.error('Elementos da coluna não encontrados!');
        return;
    }
    
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

// Carregar o material quando a página estiver pronta
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando material de estudo...');
    loadStudyMaterial();
});

// Adicionar também ao objeto global window para acesso via HTML
window.loadStudyMaterial = loadStudyMaterial;
window.showTopic = showTopic;
window.toggleStudyColumn = toggleStudyColumn;

console.log('Study.js carregado com sucesso!');