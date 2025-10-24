// study.js - Material de Referência Educacional
const studyMaterial = {
    "css": {
        title: "🎨 CSS - Folhas de Estilo",
        content: `
CSS (Cascading Style Sheets) é usado para estilizar páginas web.

📌 Propriedades de Cor:
• color: #27ae60 (verde)
• color: #dc3545 (vermelho) 
• color: #3498db (azul)
• color: #f39c12 (laranja)

📌 Seletores:
• .classe { } - para classes
• #id { } - para IDs
• elemento { } - para tags

📌 Box Model:
• padding: espaço interno
• margin: espaço externo
• border: borda
• background: fundo

📌 Exemplo prático:
.timer {
    color: #27ae60;          /* Texto verde */
    background: #ffffff;      /* Fundo branco */
    padding: 10px 20px;      /* Espaçamento interno */
    border: 2px solid #dc3545; /* Borda vermelha */
    border-radius: 5px;      /* Cantos arredondados */
}
        `
    },
    "javascript-basico": {
        title: "⚡ JavaScript Básico",
        content: `
JavaScript é a linguagem de programação da web.

📌 Declaração de Variáveis:
• let nome = valor;    // variável mutável
• const nome = valor;  // constante
• var nome = valor;    // antigo (evitar)

📌 Funções:
function soma(a, b) {
    return a + b;  // retorna o resultado
}

// Arrow function (moderna)
const soma = (a, b) => a + b;

📌 Estruturas de Controle:
• if (condição) { código }
• for (início; condição; passo) { código }
• while (condição) { código }

📌 Arrays (Listas):
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");     // adiciona no final
frutas.pop();           // remove do final
frutas.length;          // tamanho do array
        `
    },
    "javascript-avancado": {
        title: "🚀 JavaScript Avançado",
        content: `
📌 Métodos de Array:
• find() - encontra PRIMEIRO elemento
• filter() - filtra TODOS elementos
• map() - transforma cada elemento
• forEach() - executa para cada elemento
• includes() - verifica se contém

📌 Exemplos:
let numeros = [1, 2, 3, 4, 5];

// find - retorna o PRIMEIRO que satisfaz
let maiorQue3 = numeros.find(num => num > 3); // 4

// filter - retorna TODOS que satisfazem
let todosMaiores = numeros.filter(num => num > 3); // [4, 5]

// map - transforma cada elemento
let dobrados = numeros.map(num => num * 2); // [2, 4, 6, 8, 10]

📌 DOM (Document Object Model):
• document.getElementById('id')
• document.querySelector('.classe')
• elemento.addEventListener('click', função)
• elemento.textContent = 'novo texto'
        `
    },
    "html": {
        title: "🌐 HTML - Estrutura Web",
        content: `
HTML define a estrutura das páginas web.

📌 Tags Principais:
• <a href="url">link</a> - links
• <script src="arquivo.js"></script> - JavaScript
• <ul> - lista não ordenada
• <ol> - lista ordenada  
• <li> - item de lista

📌 Atributos Comuns:
• id="identificador" - identificador único
• class="classe" - classe para CSS
• src="caminho" - fonte de arquivos
• href="url" - destino de links

📌 Exemplo:
<a href="https://google.com" class="link">
    Ir para Google
</a>

<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
        `
    },
    "funcoes": {
        title: "🔧 Funções em JavaScript",
        content: `
Funções são blocos de código reutilizáveis.

📌 Tipos de Função:

1. Declaração:
   function nome(param) {
       return resultado;
   }

2. Expressão:
   const nome = function(param) {
       return resultado;
   }

3. Arrow Function:
   const nome = (param) => {
       return resultado;
   }

   // Se tem só 1 parâmetro e 1 linha:
   const nome = param => resultado;

📌 Parâmetros e Retorno:
• Parâmetros: dados que a função recebe
• return: envia resultado de volta
• Sem return: retorna undefined

📌 Exemplo:
function calcularArea(largura, altura) {
    return largura * altura;
}

let area = calcularArea(5, 10); // 50
        `
    },
    "arrays": {
        title: "📊 Arrays (Listas)",
        content: `
Arrays armazenam coleções de dados.

📌 Criação:
let vazio = [];
let numeros = [1, 2, 3];
let misto = [1, "texto", true];

📌 Métodos Principais:

• Adicionar/Remover:
  push()    - adiciona no FINAL
  pop()     - remove do FINAL  
  unshift() - adiciona no INÍCIO
  shift()   - remove do INÍCIO

• Buscar/Encontrar:
  find()    - encontra PRIMEIRO elemento
  filter()  - filtra TODOS elementos
  includes()- verifica se existe

• Transformar:
  map()     - transforma cada elemento
  forEach() - executa para cada elemento

📌 Exemplo Busca:
let produtos = [
    {nome: "Mouse", preco: 50},
    {nome: "Teclado", preco: 100}
];

// find - primeiro teclado
let teclado = produtos.find(p => p.nome === "Teclado");

// filter - produtos caros
let caros = produtos.filter(p => p.preco > 80);
        `
    },
    "eventos": {
        title: "🎯 Eventos e DOM",
        content: `
Eventos são ações do usuário (cliques, teclas, etc).

📌 Eventos Comuns:
• 'click' - clique do mouse
• 'keydown' - tecla pressionada
• 'load' - página carregada
• 'submit' - formulário enviado

📌 Como Usar:
// Método moderno
elemento.addEventListener('click', function() {
    // código executado no clique
});

// Método antigo
elemento.onclick = function() {
    // código executado no clique
};

📌 Exemplo Prático:
<button id="meuBotao">Clique Aqui</button>

<script>
document.getElementById('meuBotao')
    .addEventListener('click', function() {
        alert('Botão clicado!');
    });
</script>
        `
    },
    "objetos": {
        title: "📦 Objetos em JavaScript",
        content: `
Objetos armazenam dados como pares chave-valor.

📌 Criação:
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

📌 Acesso:
console.log(pessoa.nome);     // "João"
console.log(pessoa["idade"]); // 30

📌 Métodos:
let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    // Método moderno
    multiplicar(a, b) {
        return a * b;
    }
};

calculadora.soma(2, 3); // 5
        `
    }
};

function loadStudyMaterial() {
    const studyContent = document.getElementById('studyContent');
    studyContent.innerHTML = '';

    // Criar menu de navegação por tópicos
    const topicMenu = document.createElement('div');
    topicMenu.className = 'topic-menu';
    
    let menuHTML = '<h3>📚 Tópicos de Estudo:</h3><div class="topic-buttons">';
    
    Object.keys(studyMaterial).forEach(topicKey => {
        const topic = studyMaterial[topicKey];
        menuHTML += `<button class="topic-btn" onclick="showTopic('${topicKey}')">${topic.title}</button>`;
    });
    
    menuHTML += '</div>';
    topicMenu.innerHTML = menuHTML;
    studyContent.appendChild(topicMenu);

    // Mostrar primeiro tópico por padrão
    showTopic('css');
}

function showTopic(topicKey) {
    const topic = studyMaterial[topicKey];
    const studyContent = document.getElementById('studyContent');
    
    // Remove conteúdo anterior se existir
    const oldContent = document.getElementById('topicContent');
    if (oldContent) {
        oldContent.remove();
    }

    const topicContent = document.createElement('div');
    topicContent.id = 'topicContent';
    topicContent.className = 'topic-content';
    
    topicContent.innerHTML = `
        <div class="topic-header">
            <h2>${topic.title}</h2>
        </div>
        <div class="topic-body">
            <pre>${topic.content}</pre>
        </div>
    `;

    studyContent.appendChild(topicContent);

    // Atualizar botões ativos
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.topic-btn[onclick="showTopic('${topicKey}')"]`).classList.add('active');
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


mas preciso de boas leituras para cada uma das 50 quetoes:

// Banco de questões de programação - CRIPTOGRAFADO
// As questões estão criptografadas para evitar que alunos vejam as respostas no código fonte

const questionBank = [
    {
        type: "code",
        question: "Complete o código para deixar o contador regressivo verde:",
        code: `.timer {\n    font-size: 24px;\n    font-weight: bold;\n    color: ___________;\n    background: #fff;\n    padding: 10px 20px;\n    border-radius: 5px;\n    border: 2px solid #dc3545;\n}`,
        correct: "#27ae60",
        options: ["#27ae60", "#dc3545", "#000000", "#ffffff"]
    },
    {
        type: "code", 
        question: "Complete a função que soma dois números:",
        code: `function soma(a, b) {\n    ___________ a + b;\n}`,
        correct: "return",
        options: ["return", "console.log", "function", "var"]
    },
    {
        type: "multiple",
        question: "Qual tag HTML é usada para criar um link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para criar um array vazio:",
        code: `let frutas = ___________;`,
        correct: "[]",
        options: ["[]", "{}", "()", "array()"]
    },
    {
        type: "multiple",
        question: "Qual linguagem é principalmente usada para estilizar páginas web?",
        options: ["JavaScript", "CSS", "HTML", "Python"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o loop que imprime números de 1 a 5:",
        code: `for(let i = 1; i <= 5; i++) {\n    console.log(___________);\n}`,
        correct: "i",
        options: ["i", "5", "1", "number"]
    },
    {
        type: "multiple",
        question: "O que significa a sigla CSS?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets", 
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        type: "code",
        question: "Complete a condição para verificar se uma variável é maior que 10:",
        code: `if (___________ > 10) {\n    console.log("Maior que 10");\n}`,
        correct: "numero",
        options: ["numero", "10", "var", "if"]
    },
    {
        type: "multiple",
        question: "Qual comando é usado para declarar uma variável em JavaScript?",
        options: ["variable", "var", "let", "const"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para selecionar um elemento pelo ID:",
        code: `let elemento = document.___________("meuId");`,
        correct: "getElementById",
        options: ["getElementById", "querySelector", "getElement", "findElement"]
    },
    {
        type: "multiple",
        question: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
        options: ["//", "/*", "#", "--"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete a função que retorna o quadrado de um número:",
        code: `function quadrado(x) {\n    return x ___________ x;\n}`,
        correct: "*",
        options: ["*", "+", "-", "/"]
    },
    {
        type: "multiple",
        question: "Qual método adiciona um elemento ao final de um array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para criar um objeto vazio:",
        code: `let pessoa = ___________;`,
        correct: "{}",
        options: ["{}", "[]", "new Object()", "object()"]
    },
    {
        type: "multiple",
        question: "Qual tag HTML é usada para incluir JavaScript?",
        options: ["<javascript>", "<script>", "<js>", "<code>"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para verificar igualdade estrita:",
        code: `if (a ___________ b) {\n    // são iguais em valor e tipo\n}`,
        correct: "===",
        options: ["===", "==", "=", "!=="]
    },
    {
        type: "multiple",
        question: "Qual propriedade CSS muda a cor do texto?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: 2
    },
    {
        type: "code",
        question: "Complete o código para adicionar um evento de clique:",
        code: `botao.addEventListener("___________", function() {\n    alert("Clicado!");\n});`,
        correct: "click",
        options: ["click", "onclick", "press", "tap"]
    },
    {
        type: "multiple",
        question: "Qual método transforma uma string em maiúsculas?",
        options: ["toUpperCase()", "toUpper()", "upperCase()", "capitalize()"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para criar uma promessa:",
        code: `let promessa = ___________ Promise((resolve, reject) => {\n    // código aqui\n});`,
        correct: "new",
        options: ["new", "create", "make", "build"]
    },
    {
        type: "multiple",
        question: "Qual estrutura de dados segue o princípio LIFO?",
        options: ["Fila", "Pilha", "Lista", "Árvore"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para arredondar um número:",
        code: `let arredondado = Math.__________(3.7);`,
        correct: "round",
        options: ["round", "floor", "ceil", "random"]
    },
    {
        type: "multiple",
        question: "Qual hook do React é usado para estado?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete a destruturação de array:",
        code: `let [primeiro, ___________] = [1, 2, 3];`,
        correct: "segundo",
        options: ["segundo", "2", "resto", "array"]
    },
    {
        type: "multiple",
        question: "Qual comando Git é usado para baixar alterações?",
        options: ["git pull", "git push", "git clone", "git fetch"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para fazer uma requisição GET:",
        code: `fetch('https://api.com/data')\n    .then(response => response.___________())\n    .then(data => console.log(data));`,
        correct: "json",
        options: ["json", "text", "data", "body"]
    },
    {
        type: "multiple",
        question: "Qual método converte JSON em objeto JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete a função assíncrona:",
        code: `___________ function buscarDados() {\n    let response = await fetch(url);\n    return response.json();\n}`,
        correct: "async",
        options: ["async", "await", "function", "const"]
    },
    {
        type: "multiple",
        question: "Qual selector CSS seleciona por classe?",
        options: [".classe", "#classe", "*classe", "classe()"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para remover um elemento do DOM:",
        code: `elemento.___________();`,
        correct: "remove",
        options: ["remove", "delete", "erase", "clear"]
    },
    {
        type: "multiple",
        question: "Qual é o tipo de dado para valores verdadeiro/falso?",
        options: ["string", "number", "boolean", "array"],
        correct: 2
    },
    {
        type: "code",
        question: "Complete o código para criar uma classe:",
        code: `___________ Pessoa {\n    constructor(nome) {\n        this.nome = nome;\n    }\n}`,
        correct: "class",
        options: ["class", "function", "object", "prototype"]
    },
    {
        type: "multiple",
        question: "Qual método retorna o tamanho de um array?",
        options: ["size()", "length", "count()", "items()"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para template string:",
        code: `let nome = "João";\nlet saudacao = \`Olá, \${___________}!\`;`,
        correct: "nome",
        options: ["nome", "João", "string", "var"]
    },
    {
        type: "multiple",
        question: "Qual operador retorna o resto da divisão?",
        options: ["%", "/", "*", "//"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para usar módulos:",
        code: `___________ minhaFuncao from './meuModulo.js';`,
        correct: "import",
        options: ["import", "export", "require", "include"]
    },
    {
        type: "multiple",
        question: "Qual método transforma array em string?",
        options: ["toString()", "toArray()", "stringify()", "join()"],
        correct: 3
    },
    {
        type: "code",
        question: "Complete o código do setTimeout:",
        code: `setTimeout(() => {\n    console.log("Executado");\n}, ___________);`,
        correct: "1000",
        options: ["1000", "1", "0", "100"]
    },
    {
        type: "multiple",
        question: "Qual propriedade CSS define o espaçamento interno?",
        options: ["margin", "padding", "spacing", "border"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para criar um Map:",
        code: `let mapa = ___________ Map();`,
        correct: "new",
        options: ["new", "create", "make", "build"]
    },
    {
        type: "multiple",
        question: "Qual método encontra um elemento em array?",
        options: ["search()", "find()", "locate()", "get()"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete a arrow function:",
        code: `const dobrar = (x) => ___________;`,
        correct: "x * 2",
        options: ["x * 2", "return x * 2", "x * x", "2x"]
    },
    {
        type: "multiple",
        question: "Qual tag HTML cria uma lista não ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para erro try/catch:",
        code: `try {\n    // código\n} ___________ (erro) {\n    console.log(erro);\n}`,
        correct: "catch",
        options: ["catch", "error", "finally", "throw"]
    },
    {
        type: "multiple",
        question: "Qual método remove o último elemento de array?",
        options: ["shift()", "pop()", "remove()", "delete()"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para expressão regular:",
        code: `let regex = ___________ /hello/;`,
        correct: "new RegExp",
        options: ["new RegExp", "RegExp", "/", "regex()"]
    },
    {
        type: "multiple",
        question: "Qual evento é disparado quando a página carrega?",
        options: ["onload", "onready", "onstart", "oninit"],
        correct: 0
    },
    {
        type: "code",
        question: "Complete o código para spread operator:",
        code: `let numeros = [1, 2, 3];\nlet novosNumeros = [...numeros, ___________];`,
        correct: "4",
        options: ["4", "...", "numeros", "array"]
    },
    {
        type: "multiple",
        question: "Qual método ordena um array?",
        options: ["order()", "sort()", "arrange()", "organize()"],
        correct: 1
    },
    {
        type: "code",
        question: "Complete o código para Date:",
        code: `let agora = ___________ Date();`,
        correct: "new",
        options: ["new", "create", "get", "current"]
    }
];

// Nota: Em produção, as strings acima deveriam ser criptografadas
// Para criptografar, use: encrypt("texto") do script.js
// Exemplo: question: encrypt("Complete o código...")

console.log("Banco de questões de programação carregado!");