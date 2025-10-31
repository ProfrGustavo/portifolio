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
        options: ["variable", "var", "img", "const"],
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
        options: ["<javascript>", "<js>", "<code>","<script>"],
        correct: 3
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
        question: "Complete o código para criar uma nova promessa:",
        code: `let promessa = ___________ Promise((resolve, reject) => {\n    // código aqui\n});`,
        correct: "new",
        options: ["new", "create", "make", "build"]
    },
    {
         type: "multiple",
    question: "Qual plataforma é muito usada para colocar sites no ar?",
    options: ["Photoshop", "Excel", "Word","vercel"],
    correct: 3
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
    question: "Qual propriedade CSS muda a cor de fundo de um elemento?",
    options: ["color", "background-color", "bg-color", "background"],
    correct: 1
    },
    {
         type: "code", 
    question: "Complete o código para definir a cor do texto como branco:",
    code: `.texto {\n    color: ___________;\n}`,
    correct: "white",
    options: ["white", "#000", "black", "#fff"]
    },
    {
       type: "multiple",
    question: "Qual licença de software é muito popular e permite uso gratuito para estudantes?",
    options: ["MIT License", "Windows License", "Adobe License", "Microsoft Office License"],
    correct: 0
    },
    {
          type: "code",
    question: "Complete o código HTML para fechar a div:",
    code: `<div class="box">\n    Conteúdo aqui\n    ___________`,
    correct: "</div>",
    options: ["</div>", "</box>", "<div/>", "</class>"]
    },
    {
        type: "multiple",
    question: "O que é JSON?",
    options: [
        "JavaScript Object Notation - formato para troca de dados",
        "Java Standard Output Network", 
        "JavaScript Online Notation",
        "Java System Object Notation"
    ],
    correct: 0
    },
    {
         type: "code",
    question: "Complete o código CSS para definir margin de 10px:",
    code: `.elemento {\n    ___________\n}`,
    correct: "margin: 10px;",
    options: ["margin: 10px;", "padding: 10px;", "border: 10px;", "spacing: 10px;"]
    },
    {
        type: "multiple",
        question: "Qual selector CSS seleciona por classe?",
        options: [".classe", "#classe", "*classe", "classe()"],
        correct: 0
    },
    {
        type: "code",
    question: "Complete o código CSS para usar Flexbox:",
    code: `.container {\n    ___________\n}`,
    correct: "display: flex;",
    options: ["display: flex;", "flex: true;", "layout: flex;", "flexbox: on;"]
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
        question: "Complete o código para criar um novo Map:",
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