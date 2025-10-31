// study.js - Material de Estudo COMPLETO e DETALHADO
const studyMaterial = {
    "html-estrutura-basica": {
        title: "📚 HTML - Estrutura Básica e Tags Fundamentais",
        content: `🌐 **HTML (HyperText Markup Language)**
É a ESTRUTURA e ESQUELETO das páginas web. Define o CONTEÚDO, não a aparência.

🏗️ **ESTRUTURA BÁSICA DE UM DOCUMENTO HTML:**

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site</title>
</head>
<body>
    <!-- CONTEÚDO VISÍVEL AQUI -->
    <h1>Olá Mundo!</h1>
</body>
</html>

🔍 **ANATOMIA DAS TAGS:**

<!-- Tag de abertura -->  <!-- Tag de fechamento -->
    <h1>                  </h1>             
          ⬆️                ⬆️
    Conteúdo aqui      Mesmo nome com /

📌 **TAGS SEMÂNTICAS - Significado Importante:**

<header>    - Cabeçalho da página ou seção
<nav>       - Menu de navegação
<main>      - Conteúdo principal
<section>   - Seção de conteúdo
<article>   - Conteúdo independente (post, notícia)
<aside>     - Conteúdo lateral (sidebar)
<footer>    - Rodapé

🎯 **TAGS MAIS IMPORTANTES NA PRÁTICA:**

<!-- LINKS - Conexão entre páginas -->
<a href="https://exemplo.com">Texto do Link</a>

<!-- LISTAS - Organização de itens -->
<ul>  <!-- Lista NÃO ordenada (bolinhas) -->
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>  <!-- Lista ORDENADA (números) -->
    <li>Primeiro</li>
    <li>Segundo</li>
</ol>

<!-- IMAGENS -->
<img src="foto.jpg" alt="Descrição da imagem">

<!-- DIVISÕES - Containers genéricos -->
<div>Bloco de conteúdo</div>
<span>Texto inline</span>

💡 **ATRIBUTOS - Configurações das Tags:**

<!-- Atributo href define o destino -->
<a href="contato.html" target="_blank">Contato</a>
     ⬆️              ⬆️
   destino       abre em nova aba

<!-- Atributos comuns -->
id="unico"           /* Identificador ÚNICO */
class="grupo"        /* Classe para CSS/JS */
style="color: red;"  /* Estilo inline */
data-info="valor"    /* Dados personalizados */

🚀 **INCLUSÃO DE SCRIPTS E ESTILOS:**

<!-- CSS EXTERNO (RECOMENDADO) -->
<link rel="stylesheet" href="estilos.css">

<!-- CSS INTERNO -->
<style>
    body { color: blue; }
</style>

<!-- JAVASCRIPT EXTERNO -->
<script src="script.js"></script>

<!-- JAVASCRIPT INTERNO -->
<script>
    alert("Olá!");
</script>

⚠️ **ERROS COMUNS DE INICIANTE:**
• Esquecer de fechar tags
• Confundir <link> (CSS) com <a> (links)
• Usar múltiplos elementos com mesmo ID
• Esquecer o alt em imagens

🛠️ **EXERCÍCIO PRÁTICO:**
Crie uma página com:
- Título principal
- Lista de 3 links para sites externos
- Imagem com descrição
- Rodapé com copyright

🎓 **BOAS PRÁTICAS HTML5:**
1. Use tags semânticas sempre que possível
2. Sempre inclua lang no <html>
3. Use UTF-8 para caracteres especiais
4. Mantenha a estrutura hierárquica correta
5. Valide seu HTML com validators`
    },

 "git-comandos": {
        title: "🛠️ Git - Comandos Essenciais",
        content: `📚 **COMANDOS GIT MAIS USADOS:**

# BAIXAR alterações do repositório
git pull origin main

# ENVIAR alterações para o repositório  
git push origin main

# CLONAR repositório pela primeira vez
git clone https://github.com/usuario/projeto.git

# BAIXAR mas NÃO integrar alterações
git fetch origin

🎯 **DIFERENÇA IMPORTANTE:**
git pull = git fetch + git merge  (faz ambos)
git fetch = apenas baixa (mais seguro)`
    },

    "css-cores-fundos": {
        title: "🎨 CSS - Cores e Fundos",
        content: `🎨 **PROPRIEDADES DE COR EM CSS:**

/* COR do TEXTO */
color: white;           /* Nome da cor */
color: #ffffff;         /* Hexadecimal */
color: rgb(255,255,255); /* RGB */

/* COR de FUNDO */
background-color: blue;
background-color: #0000ff;
background-color: rgb(0, 0, 255);

📏 **MARGIN vs PADDING:**

/* MARGIN - Espaço EXTERNO */
margin: 10px;           /* Todos os lados */
margin: 10px 20px;      /* Vertical | Horizontal */

/* PADDING - Espaço INTERNO */  
padding: 15px;
padding: 10px 5px 15px 20px; /* Top | Right | Bottom | Left */

🎪 **FLEXBOX - Layout Moderno:**

.container {
    display: flex;          /* ✅ Ativa Flexbox */
    justify-content: center; /* Alinha horizontalmente */
    align-items: center;    /* Alinha verticalmente */
}`
    },

    "html-tags": {
        title: "🌐 HTML - Tags Essenciais",
        content: `🏗️ **TAGS HTML MAIS IMPORTANTES:**

<!-- DIV - Container genérico -->
<div class="box">
    Conteúdo aqui
</div>                    <!-- ✅ Fechamento correto -->

<!-- LINK entre páginas -->
<a href="https://exemplo.com">Texto do Link</a>

📝 **REGRA DE FECHAMENTO:**
Sempre feche tags com </nomedatag>`
    },

    "javascript-avancado": {
        title: "⚡ JavaScript - Conceitos Avançados",
        content: `📄 **JSON - Troca de Dados:**

// OBJETO → STRING JSON
let pessoa = {nome: "Ana", idade: 28};
let jsonString = JSON.stringify(pessoa);

// STRING JSON → OBJETO
let objeto = JSON.parse('{"nome":"João","idade":32}');

🌐 **MANIPULAÇÃO DO DOM:**

// REMOVER elemento da página
elemento.remove();          // ✅ Método moderno

// REQUISIÇÃO HTTP GET
fetch('https://api.com/data')
    .then(response => response.json())  // ✅ Converte para objeto
    .then(data => console.log(data));

⏳ **ASYNC/AWAIT - Código Assíncrono:**

async function buscarDados() {    // ✅ Palavra-chave async
    let response = await fetch(url);
    return response.json();
}`
    },

    "licencas-software": {
        title: "📜 Licenças de Software",
        content: `🎓 **LICENÇAS POPULARES:**

MIT License - ✅ Gratuita, permite uso comercial e modificações
GPL - Gratuita, exige que derivados sejam open source
Apache - Similar à MIT, com proteção de patentes

💡 **PARA ESTUDANTES:**
MIT License é a mais popular para projetos acadêmicos
e open source.`
    }

    "css-sintaxe-seletores": {
        title: "🎨 CSS - Sintaxe, Seletores e Box Model",
        content: `🎨 **CSS (Cascading Style Sheets)**
Controla a APARÊNCIA visual: cores, fontes, layout, animações.

📖 **SINTAXE BÁSICA DO CSS:**

seletor {
    propriedade: valor;
    outra-propriedade: valor;
}

/* EXEMPLO PRÁTICO */
.titulo {
    color: blue;
    font-size: 24px;
    margin: 10px;
}

🎯 **SELETORES - Como ENCONTRAR elementos:**

/* Por ELEMENTO (tag) */
div { 
    background: yellow; 
}

/* Por CLASSE (pode repetir) */
.botao { 
    color: white; 
}

/* Por ID (deve ser ÚNICO) */
#header { 
    height: 80px; 
}

/* COMBINAÇÕES AVANÇADAS */
div.botao           /* <div class="botao"> */
#header .menu       /* Elemento com classe menu DENTRO do header */
div > p             /* Parágrafos FILHOS DIRETOS de div */
a:hover             /* Quando mouse passa por cima */

🌈 **SISTEMA DE CORES - 4 Formas:**

/* 1. NOMES (mais simples) */
color: red;
color: blue;

/* 2. HEXADECIMAL (mais usado) */
color: #ff0000;     /* Vermelho */
color: #27ae60;     /* Verde */
color: #000000;     /* Preto */
color: #ffffff;     /* Branco */

/* 3. RGB (Red, Green, Blue) */
color: rgb(255, 0, 0);      /* Vermelho */
color: rgb(39, 174, 96);    /* Verde */

/* 4. HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);   /* Vermelho */

🏗️ **BOX MODEL - O Modelo da Caixa:**

[ MARGIN (externo) ]
  [ BORDER (borda) ]
    [ PADDING (interno) ]
      [ CONTEÚDO ]

📐 **PROPRIEDADES DO BOX MODEL:**

.conteudo {
    /* CONTEÚDO - Largura e Altura */
    width: 300px;
    height: 200px;
    
    /* PADDING - Espaço INTERNO */
    padding: 20px;              /* Todos os lados */
    padding: 10px 20px;         /* Vertical | Horizontal */
    padding: 5px 10px 15px 20px; /* Top | Right | Bottom | Left */
    
    /* BORDER - Linha ao redor */
    border: 2px solid #000;     /* Largura | Estilo | Cor */
    border-radius: 10px;        /* Cantos arredondados */
    
    /* MARGIN - Espaço EXTERNO */
    margin: 15px;
}

🎪 **ESTILOS DE BORDA:**

border: 2px solid red;      /* Linha contínua */
border: 3px dotted blue;    /* Pontilhado */
border: 1px dashed green;   /* Tracejado */
border: 4px double black;   /* Dupla */

📏 **UNIDADES DE MEDIDA:**

/* ABSOLUTAS (fixas) */
px  /* Pixels - mais comum */
pt  /* Points - impressão */

/* RELATIVAS (flexíveis) */
%   /* Porcentagem do elemento pai */
em  /* Tamanho da fonte do elemento pai */
rem /* Tamanho da fonte do elemento raiz (html) */
vw  /* Porcentagem da largura da viewport */
vh  /* Porcentagem da altura da viewport */

🚀 **LAYOUT E POSICIONAMENTO BÁSICO:**

/* DISPLAY - Como o elemento se comporta */
display: block;      /* Ocupa linha inteira (div, h1, p) */
display: inline;     /* Na mesma linha (span, a, strong) */
display: inline-block; /* Linha mas com width/height */
display: none;       /* Escondido completamente */

/* POSITION - Posicionamento */
position: static;    /* Padrão - fluxo normal */
position: relative;  /* Relativo à posição normal */
position: absolute;  /* Relativo ao elemento pai posicionado */
position: fixed;     /* Fixo na tela */

🛠️ **EXEMPLO COMPLETO - Botão Estilizado:**

.botao {
    /* CONTEÚDO */
    color: white;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    
    /* BOX MODEL */
    background: #3498db;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    margin: 10px;
    
    /* LAYOUT */
    display: inline-block;
    cursor: pointer;
    
    /* EFEITOS */
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.botao:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

💡 **DICAS IMPORTANTES:**
• Use classes para estilos reutilizáveis
• IDs apenas para elementos únicos
• Sempre teste em múltiplos navegadores
• Use unidades relativas para responsividade
• Organize propriedades por categoria

⚠️ **ERROS COMUNS:**
• Confundir padding com margin
• Usar !important sem necessidade
• Esquecer do border-radius em botões
• Não testar contraste de cores`
    },

    "javascript-variaveis-tipos": {
        title: "💻 JavaScript - Variáveis, Tipos de Dados e Operadores",
        content: `⚡ **JAVASCRIPT - A Linguagem da Web**
Adiciona INTERATIVIDADE e COMPORTAMENTO às páginas.

📝 **VARIÁVEIS - Caixas que guardam valores:**

// FORMAS DE DECLARAR VARIÁVEIS:

// 1. let - variável que PODE mudar (RECOMENDADO)
let nome = "João";
nome = "Maria";  // ✅ PERMITIDO

// 2. const - CONSTANTE, NÃO pode mudar (MAIS SEGURO)
const PI = 3.14;
// PI = 3.15;    // ❌ ERRO! Constante não muda

// 3. var - forma ANTIGA (EVITAR)
var idade = 25;

🎯 **POR QUE USAR const E let?**

• const - Use SEMPRE que o valor NÃO mudar
• let - Use APENAS quando o valor PRECISAR mudar
• var - Tem problemas de escopo, EVITE

🔤 **TIPOS DE DADOS PRIMITIVOS:**

// STRING - Texto
let nome = "Maria";
let sobrenome = 'Silva';
let frase = \`Olá \${nome}!\`;  // Template string

// NUMBER - Números
let idade = 25;
let preco = 19.99;
let temperatura = -5;

// BOOLEAN - Verdadeiro ou Falso
let ligado = true;
let encontrado = false;

// UNDEFINED - Não definido
let valor;          // undefined
let coisa = undefined;

// NULL - Nulo intencional
let vazio = null;

📦 **TIPOS DE DADOS COMPOSTOS:**

// ARRAY - Lista ordenada
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true];

// OBJECT - Coleção de propriedades
let pessoa = {
    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo",
    ativo: true
};

🔢 **OPERADORES ARITMÉTICOS:**

let a = 10, b = 3;

a + b    // 13  - Adição
a - b    // 7   - Subtração  
a * b    // 30  - Multiplicação
a / b    // 3.33 - Divisão
a % b    // 1   - Módulo (resto da divisão)
a ** b   // 1000 - Exponenciação (a elevado a b)

⚖️ **OPERADORES DE COMPARAÇÃO:**

// IGUALDADE ESTRITA (RECOMENDADO)
5 === 5      // true - mesmo valor E tipo
5 === "5"    // false - número ≠ string

// IGUALDADE SOLTA (EVITAR)
5 == 5       // true
5 == "5"     // true - converte tipos

// DIFERENÇA
10 !== 5     // true
10 != "10"   // false

// MAIOR/MENOR
10 > 5       // true
10 < 5       // false
10 >= 10     // true
10 <= 5      // false

🔗 **OPERADORES LÓGICOS:**

let temIdade = true;
let temDocumento = false;

// AND - Ambos devem ser true
temIdade && temDocumento    // false

// OR - Pelo menos um true  
temIdade || temDocumento    // true

// NOT - Inverte o valor
!temIdade                   // false

🎮 **ESTRUTURAS DE CONTROLE - IF/ELSE:**

let idade = 18;

// IF SIMPLES
if (idade >= 18) {
    console.log("Maior de idade");
}

// IF/ELSE
if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// IF/ELSE IF/ELSE
if (idade < 16) {
    console.log("Não pode votar");
} else if (idade < 18) {
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}

🔄 **LOOPS - FOR E WHILE:**

// FOR - Quando sabemos quantas repetições
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// WHILE - Quando NÃO sabemos quantas repetições
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// DO-WHILE - Executa pelo menos uma vez
let numero;
do {
    numero = Math.random();
} while (numero < 0.5);

🛠️ **EXEMPLO PRÁTICO - Calculadora Simples:**

function calculadora(a, b, operacao) {
    if (operacao === '+') {
        return a + b;
    } else if (operacao === '-') {
        return a - b;
    } else if (operacao === '*') {
        return a * b;
    } else if (operacao === '/') {
        return a / b;
    } else {
        return "Operação inválida";
    }
}

// Uso
let resultado = calculadora(10, 5, '+');  // 15

💡 **DICAS IMPORTANTES:**
• Use nomes descritivos para variáveis
• Sempre declare variáveis antes de usar
• Prefira === em vez de ==
• Use const por padrão, let apenas quando necessário
• Comente código complexo

⚠️ **ERROS COMUNS:**
• Esquecer de declarar variáveis
• Confundir = (atribuição) com === (comparação)
• Usar var em vez de let/const
• Não tratar casos especiais (divisão por zero)`
    },

    "javascript-funcoes": {
        title: "💻 JavaScript - Funções e Escopo",
        content: `🎯 **FUNÇÕES - Blocos de código reutilizáveis**
Agrupam instruções para executar tarefas específicas.

📝 **DECLARAÇÃO DE FUNÇÕES:**

// 1. FUNCTION DECLARATION (hoisting - pode chamar antes)
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// 2. FUNCTION EXPRESSION
const saudacao = function(nome) {
    return "Olá, " + nome + "!";
};

// 3. ARROW FUNCTION (ES6+ - moderna)
const saudacao = (nome) => {
    return "Olá, " + nome + "!";
};

🔄 **CHAMANDO FUNÇÕES:**

// Função sem parâmetros
function cumprimentar() {
    console.log("Bom dia!");
}
cumprimentar();  // "Bom dia!"

// Função com parâmetros
function somar(a, b) {
    return a + b;
}
let resultado = somar(5, 3);  // resultado = 8

// Função com múltiplos parâmetros
function criarUsuario(nome, email, idade = 18) {
    return {
        nome: nome,
        email: email,
        idade: idade
    };
}

🎪 **PARÂMETROS E ARGUMENTOS:**

// PARÂMETROS - Variáveis na definição
function calcular(operacao, a, b) {
    // operacao, a, b são parâmetros
}

// ARGUMENTOS - Valores passados na chamada
calcular('soma', 10, 5);  // 'soma', 10, 5 são argumentos

// VALOR PADRÃO para parâmetros
function multiplicar(a, b = 1) {
    return a * b;
}
multiplicar(5);     // 5 (b usa valor padrão 1)
multiplicar(5, 2);  // 10

🔙 **RETURN - Retornando valores:**

// COM return - devolve um valor
function quadrado(x) {
    return x * x;  // ← valor retornado
}
let resultado = quadrado(4);  // 16

// SEM return - retorna undefined
function apenasLog(x) {
    console.log(x);
    // ← sem return = undefined
}
let resultado = apenasLog(5);  // undefined

🏹 **ARROW FUNCTIONS (ES6+):**

// Sintaxe básica
const soma = (a, b) => {
    return a + b;
};

// Formas concisas:

// 1 parâmetro - sem parênteses
const quadrado = x => x * x;

// Múltiplos parâmetros - com parênteses
const soma = (a, b) => a + b;

// Sem parâmetros - parênteses vazios
const mensagem = () => "Hello World";

// Múltiplas linhas - chaves e return
const calcular = (a, b) => {
    let resultado = a + b;
    return resultado * 2;
};

🌍 **ESCOPO - Onde variáveis são visíveis:**

// ESCOPO GLOBAL - Disponível em todo código
const global = "Estou em todo lugar";

function testeEscopo() {
    // ESCOPO LOCAL - Só dentro desta função
    let local = "Só existo aqui";
    console.log(global);  // ✅ Funciona
    console.log(local);   // ✅ Funciona
}

console.log(global);  // ✅ Funciona  
console.log(local);   // ❌ ERRO - local não existe aqui

🔍 **ESCOPO COM LET/CONST vs VAR:**

// COM let/const - escopo de bloco
if (true) {
    let dentroIf = "só no if";
    const constante = "também só aqui";
}
console.log(dentroIf);   // ❌ ERRO

// COM var - escopo de função (problema!)
if (true) {
    var vazamento = "vaza do if";
}
console.log(vazamento);  // ✅ Funciona (PROBLEMA!)

🛠️ **EXEMPLOS PRÁTICOS:**

// 1. FUNÇÃO PARA VERIFICAR PAR/ÍMPAR
function ehPar(numero) {
    return numero % 2 === 0;
}

// 2. FUNÇÃO PARA FORMATAR MOEDA
function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

// 3. FUNÇÃO PARA VALIDAR EMAIL
function validarEmail(email) {
    return email.includes('@') && email.includes('.');
}

// 4. CALCULADORA COM ARROW FUNCTIONS
const calculadora = {
    soma: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : 'Erro: divisão por zero'
};

🚀 **CASOS DE USO AVANÇADOS:**

// FUNÇÕES COMO PARÂMETROS (callback)
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

let resultado = executarOperacao(10, 5, (x, y) => x * y);

// RETORNANDO FUNÇÕES (closure)
function criarMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const dobrar = criarMultiplicador(2);
dobrar(5);  // 10

💡 **BOAS PRÁTICAS:**
• Funções devem fazer UMA coisa bem feita
• Use nomes verbosos para funções (somar, validar, formatar)
• Limite o número de parâmetros (máximo 3-4)
• Use arrow functions para callbacks
• Documente funções complexas

⚠️ **ERROS COMUNS:**
• Esquecer o return em funções que devolvem valores
• Confundir parâmetros com argumentos
• Modificar parâmetros originais (crie cópias)
• Criar funções grandes demais (上帝函数)`
    },

    "javascript-arrays-objetos": {
        title: "🔧 JavaScript - Arrays, Objetos e Métodos",
        content: `📊 **ARRAYS - Listas ordenadas de valores**
Estrutura fundamental para armazenar coleções de dados.

🎯 **CRIANDO E ACESSANDO ARRAYS:**

// CRIANDO ARRAYS
let vazio = [];                      // Array vazio
let frutas = ["maçã", "banana", "laranja"];  // Com strings
let numeros = [1, 2, 3, 4, 5];      // Com números
let misto = [1, "texto", true, null]; // Tipos mistos

// ACESSANDO ELEMENTOS
let primeiro = frutas[0];    // "maçã" - índice 0
let segundo = frutas[1];     // "banana" - índice 1  
let ultimo = frutas[2];      // "laranja" - índice 2
let tamanho = frutas.length; // 3 - número de elementos

// MODIFICANDO ELEMENTOS
frutas[1] = "uva";          // ["maçã", "uva", "laranja"]
frutas[3] = "morango";      // Adiciona novo elemento

🔄 **MÉTODOS DE ARRAY - ADICIONAR/REMOVER:**

let lista = ["A", "B", "C"];

// ADICIONAR NO FINAL
lista.push("D");        // ["A", "B", "C", "D"]

// REMOVER DO FINAL  
lista.pop();            // ["A", "B", "C"] - remove "D"

// ADICIONAR NO INÍCIO
lista.unshift("Z");     // ["Z", "A", "B", "C"]

// REMOVER DO INÍCIO
lista.shift();          // ["A", "B", "C"] - remove "Z"

🎪 **OUTROS MÉTODOS IMPORTANTES:**

let numeros = [1, 2, 3, 4, 5];

// ENCONTRAR ELEMENTO
let encontrado = numeros.find(n => n > 3);  // 4 - primeiro > 3

// FILTRAR ELEMENTOS
let filtrados = numeros.filter(n => n % 2 === 0);  // [2, 4] - pares

// TRANSFORMAR ELEMENTOS
let dobrados = numeros.map(n => n * 2);  // [2, 4, 6, 8, 10]

// ORDENAR
let desordenado = [3, 1, 4, 2];
let ordenado = desordenado.sort();  // [1, 2, 3, 4]

// JUNTAR EM STRING
let texto = frutas.join(", ");  // "maçã, banana, laranja"

📦 **OBJETOS - Coleções de propriedades**
Armazenam dados como pares CHAVE-VALOR.

🏗️ **CRIANDO E ACESSANDO OBJETOS:**

// SINTAXE LITERAL (mais comum)
let pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo",
    ativo: true
};

// ACESSANDO PROPRIEDADES
console.log(pessoa.nome);        // "Maria" - notação de ponto
console.log(pessoa["idade"]);    // 30 - notação de colchetes

// MODIFICANDO PROPRIEDADES
pessoa.idade = 31;
pessoa.profissao = "Desenvolvedora";  // Adiciona nova propriedade

🔧 **MÉTODOS EM OBJETOS:**

let calculadora = {
    // PROPRIEDADES
    marca: "XYZ",
    
    // MÉTODOS (funções dentro de objetos)
    somar: function(a, b) {
        return a + b;
    },
    
    // MÉTODO MODERNO (ES6+)
    subtrair(a, b) {
        return a - b;
    },
    
    // MÉTODO COM this
    mostrarMarca() {
        return "Marca: " + this.marca;
    }
};

// USANDO MÉTODOS
calculadora.somar(5, 3);        // 8
calculadora.mostrarMarca();     // "Marca: XYZ"

🔄 **PERCORRENDO ARRAYS E OBJETOS:**

// FOR CLÁSSICO - Arrays
let numeros = [10, 20, 30];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);  // 10, 20, 30
}

// FOR...OF - Arrays (moderno)
for (let numero of numeros) {
    console.log(numero);      // 10, 20, 30
}

// FOR...IN - Objetos (propriedades)
for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}

// forEach - Arrays (funcional)
numeros.forEach(function(numero, index) {
    console.log(index + ": " + numero);
});

🎯 **MÉTODOS DE STRING:**

let texto = "JavaScript é incrível!";

// TRANSFORMAÇÃO
texto.toUpperCase();      // "JAVASCRIPT É INCRÍVEL!"
texto.toLowerCase();      // "javascript é incrível!"
texto.trim();             // Remove espaços do início/fim

// INFORMAÇÃO
texto.length;             // 22 - número de caracteres
texto.includes("Script"); // true - contém "Script"
texto.indexOf("é");       // 11 - posição do "é"

// MANIPULAÇÃO
texto.slice(0, 10);       // "JavaScript" - extrai parte
texto.replace("incrível", "fantástico"); // Substitui

🔢 **OBJETOS MATH E DATE:**

// MATH - Operações matemáticas
Math.round(4.7);          // 5 - arredonda
Math.floor(4.7);          // 4 - arredonda para baixo
Math.ceil(4.2);           // 5 - arredonda para cima
Math.random();            // Número aleatório entre 0-1
Math.max(1, 5, 3);        // 5 - maior número
Math.min(1, 5, 3);        // 1 - menor número

// DATE - Trabalhar com datas
let agora = new Date();                // Data/hora atual
let natal = new Date(2024, 11, 25);   // 25/12/2024

agora.getFullYear();       // 2024 - ano
agora.getMonth();          // 0-11 - mês (0 = Janeiro)
agora.getDate();           // 1-31 - dia do mês
agora.getDay();            // 0-6 - dia da semana (0 = Domingo)

📝 **TEMPLATE STRINGS (ES6+):**

let nome = "Carlos";
let idade = 25;

// CONCATENAÇÃO TRADICIONAL (complexa)
let mensagem = "Olá, " + nome + "! Você tem " + idade + " anos.";

// TEMPLATE STRING (moderna e limpa)
let mensagem = \`Olá, \${nome}! Você tem \${idade} anos.\`;

// MULTILINHA NATURAL
let texto = \`
    Linha 1
    Linha 2
    Linha 3
\`;

// EXPRESSÕES DENTRO DE \${}
let calculo = \`5 + 3 = \${5 + 3}\`;  // "5 + 3 = 8"

🛠️ **EXEMPLOS PRÁTICOS:**

// 1. LISTA DE COMPRAS
let compras = ["pão", "leite", "ovos"];
compras.push("queijo");
compras.forEach(item => console.log("- " + item));

// 2. SISTEMA DE USUÁRIOS
let usuarios = [
    { nome: "Ana", idade: 28, ativo: true },
    { nome: "João", idade: 32, ativo: false },
    { nome: "Maria", idade: 25, ativo: true }
];

let usuariosAtivos = usuarios.filter(u => u.ativo);
let nomes = usuarios.map(u => u.nome);

// 3. CALCULADORA ESTATÍSTICA
let numeros = [10, 20, 30, 40, 50];
let soma = numeros.reduce((total, num) => total + num, 0);
let media = soma / numeros.length;
let maximo = Math.max(...numeros);

💡 **DICAS AVANÇADAS:**
• Use map/filter/reduce para manipulação funcional
• Spread operator (...) para copiar arrays/objetos
• Destructuring para extrair valores facilmente
• Métodos encadeados para operações sequenciais

⚠️ **ERROS COMUNS:**
• Modificar arrays originais acidentalmente
• Confundir == com === em objetos
• Esquecer que arrays são referências
• Não tratar casos de array vazio`
    },

    "javascript-dom-eventos": {
        title: "⚡ JavaScript - DOM, Eventos e JSON",
        content: `🌐 **DOM (Document Object Model)**
Representação da página web como OBJETOS que podemos manipular com JavaScript.

🏗️ **SELECIONANDO ELEMENTOS DO DOM:**

// POR ID (retorna UM elemento)
let titulo = document.getElementById("meuTitulo");

// POR CLASSE (retorna COLECÃO)
let botoes = document.getElementsByClassName("botao");

// POR TAG (retorna COLECÃO)  
let paragrafos = document.getElementsByTagName("p");

// POR SELETOR CSS (retorna PRIMEIRO)
let elemento = document.querySelector(".minha-classe");

// POR SELETOR CSS (retorna TODOS)
let elementos = document.querySelectorAll("div.botao");

🎯 **MANIPULANDO CONTEÚDO E ATRIBUTOS:**

// CONTEÚDO DE TEXTO
elemento.textContent = "Novo texto";     // Apenas texto
elemento.innerHTML = "<strong>Texto</strong>";  // HTML

// ATRIBUTOS
elemento.setAttribute("id", "novoId");   // Adiciona/modifica
elemento.getAttribute("id");             // Lê valor
elemento.removeAttribute("id");          // Remove

// CLASSES
elemento.classList.add("nova-classe");      // Adiciona
elemento.classList.remove("classe-antiga"); // Remove
elemento.classList.toggle("ativo");         // Alterna
elemento.classList.contains("classe");      // Verifica

// ESTILOS
elemento.style.color = "red";            // Cor do texto
elemento.style.backgroundColor = "blue"; // Cor de fundo
elemento.style.fontSize = "20px";        // Tamanho da fonte

🔄 **CRIANDO E REMOVENDO ELEMENTOS:**

// CRIAR NOVO ELEMENTO
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo";

// ADICIONAR AO DOM
document.body.appendChild(novoParagrafo);        // Final
elementoPai.prepend(novoElemento);               // Início
elementoReferencia.before(novoElemento);         // Antes
elementoReferencia.after(novoElemento);          // Depois

// CLONAR ELEMENTO
let copia = elementoOriginal.cloneNode(true);    // true = copia filhos

// REMOVER ELEMENTO
elemento.remove();                               // Método moderno
elementoPai.removeChild(elemento);               // Método antigo

🎪 **EVENTOS - Respondendo a ações do usuário:**

// ADICIONAR EVENT LISTENER (MODERNO)
elemento.addEventListener("click", function() {
    console.log("Elemento clicado!");
});

// EVENTOS COMUNS:
"click"         // Clique do mouse
"mouseover"     // Mouse sobre elemento
"mouseout"      // Mouse sai do elemento
"keydown"       // Tecla pressionada
"keyup"         // Tecla liberada
"submit"        // Formulário enviado
"change"        // Valor alterado (input, select)
"load"          // Página carregada

🛠️ **EXEMPLOS PRÁTICOS DE EVENTOS:**

// 1. BOTÃO QUE ALTERA COR
let botao = document.getElementById("meuBotao");
let div = document.getElementById("minhaDiv");

botao.addEventListener("click", function() {
    div.style.backgroundColor = "lightblue";
});

// 2. VALIDAÇÃO DE FORMULÁRIO
let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    
    if (!email.includes("@")) {
        event.preventDefault();  // Impede envio
        alert("Email inválido!");
    }
});

// 3. CONTADOR DE CLIKES
let contador = 0;
let botaoContador = document.getElementById("contador");

botaoContador.addEventListener("click", function() {
    contador++;
    botaoContador.textContent = "Clicado: " + contador;
});

📄 **JSON (JavaScript Object Notation)**
Formato leve para troca de dados entre sistemas.

🔄 **CONVERTENDO ENTRE JSON E OBJETOS:**

// OBJETO JAVASCRIPT → STRING JSON
let pessoa = { nome: "Ana", idade: 28 };
let jsonString = JSON.stringify(pessoa);
// '{"nome":"Ana","idade":28}'

// STRING JSON → OBJETO JAVASCRIPT  
let jsonTexto = '{"nome":"João","idade":32}';
let objeto = JSON.parse(jsonTexto);
// { nome: "João", idade: 32 }

🎯 **USANDO JSON NA PRÁTICA:**

// SALVAR NO LOCALSTORAGE
let usuario = { nome: "Maria", tema: "escuro" };
localStorage.setItem("usuario", JSON.stringify(usuario));

// RECUPERAR DO LOCALSTORAGE
let dadosSalvos = localStorage.getItem("usuario");
let usuarioRecuperado = JSON.parse(dadosSalvos);

// ENVIAR PARA API
fetch('/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario)
});

🌐 **FETCH API - Fazendo requisições HTTP:**

// REQUISIÇÃO GET SIMPLES
fetch('https://api.exemplo.com/usuarios')
    .then(response => response.json())  // Converte para JSON
    .then(data => {
        console.log(data);  // Dados da API
    })
    .catch(error => {
        console.error('Erro:', error);
    });

// REQUISIÇÃO COM TRATAMENTO DE ERRO
fetch('https://api.exemplo.com/dados')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => processarDados(data))
    .catch(error => console.error('Falha:', error));

⏳ **ASYNC/AWAIT - Sintaxe moderna para promises:**

// FUNÇÃO ASSÍNCORA
async function buscarUsuario(id) {
    try {
        let response = await fetch(\`https://api.exemplo.com/usuarios/\${id}\`);
        
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }
        
        let usuario = await response.json();
        return usuario;
        
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return null;
    }
}

// USANDO A FUNÇÃO ASSÍNCORA
async function mostrarUsuario() {
    let usuario = await buscarUsuario(123);
    if (usuario) {
        console.log('Usuário:', usuario.nome);
    }
}

🛠️ **EXEMPLO COMPLETO - Sistema de Tarefas:**

// ESTRUTURA HTML:
// <input id="novaTarefa">
// <button id="adicionar">Adicionar</button>
// <ul id="listaTarefas"></ul>

document.addEventListener('DOMContentLoaded', function() {
    let inputTarefa = document.getElementById('novaTarefa');
    let botaoAdicionar = document.getElementById('adicionar');
    let listaTarefas = document.getElementById('listaTarefas');
    
    // Carregar tarefas salvas
    let tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
        listaTarefas.innerHTML = JSON.parse(tarefasSalvas);
    }
    
    // Adicionar nova tarefa
    botaoAdicionar.addEventListener('click', function() {
        let texto = inputTarefa.value.trim();
        
        if (texto !== '') {
            let li = document.createElement('li');
            li.textContent = texto;
            
            // Botão para remover
            let botaoRemover = document.createElement('button');
            botaoRemover.textContent = '❌';
            botaoRemover.addEventListener('click', function() {
                li.remove();
                salvarTarefas();
            });
            
            li.appendChild(botaoRemover);
            listaTarefas.appendChild(li);
            
            inputTarefa.value = '';
            salvarTarefas();
        }
    });
    
    function salvarTarefas() {
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas.innerHTML));
    }
});

💡 **DICAS AVANÇADAS:**
• Use event delegation para elementos dinâmicos
• Sempre valide dados antes do JSON.parse
• Use try/catch com operações assíncronas
• Prefira addEventListener em vez de onclick

⚠️ **ERROS COMUNS:**
• Esquecer await em funções async
• Não tratar erros em promises
• Modificar DOM em loops (causa reflow)
• Vazamento de memória com event listeners`
    },

    "javascript-avancado": {
        title: "⚡ JavaScript - Recursos Avançados ES6+",
        content: `🚀 **RECURSOS AVANÇADOS DO JAVASCRIPT MODERNO**
Funcionalidades que tornam o código mais limpo e poderoso.

🎯 **DESTRUCTURING - Extraindo valores facilmente:**

// DESTRUCTURING DE ARRAY
let [primeiro, segundo] = [10, 20, 30];
// primeiro = 10, segundo = 20

// PULAR ELEMENTOS
let [x, , z] = [1, 2, 3];  // x=1, z=3

// VALOR PADRÃO
let [nome = "Visitante"] = [];  // nome="Visitante"

// DESTRUCTURING DE OBJETO
let { nome, idade } = { nome: "Carlos", idade: 30, cidade: "SP" };
// nome = "Carlos", idade = 30

// RENOMEAR VARIÁVEIS
let { nome: firstName, idade: age } = pessoa;

📤 **SPREAD OPERATOR (...) - Expandindo elementos:**

// COM ARRAYS - Copiar e combinar
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinado = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

let copia = [...arr1];  // Cópia superficial [1, 2, 3]

// COM OBJETOS - Copiar e mesclar
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };  // {a:1, b:2, c:3, d:4}

// EM CHAMADAS DE FUNÇÃO
let numeros = [1, 2, 3];
Math.max(...numeros);  // Equivale a Math.max(1, 2, 3)

🏗️ **CLASSES - Programação Orientada a Objetos:**

// DEFINIÇÃO DE CLASSE
class Pessoa {
    // CONSTRUCTOR - inicialização
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // MÉTODOS (automatically in prototype)
    falar() {
        return \`Olá, meu nome é \${this.nome}\`;
    }
    
    // MÉTODO ESTÁTICO
    static definirEspecie() {
        return "Homo sapiens";
    }
}

// USANDO A CLASSE
let joao = new Pessoa("João", 25);
joao.falar();  // "Olá, meu nome é João"
Pessoa.definirEspecie();  // "Homo sapiens"

// HERANÇA
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);  // Chama constructor da classe pai
        this.curso = curso;
    }
    
    estudar() {
        return \`\${this.nome} está estudando \${this.curso}\`;
    }
}

🗺️ **MAP - Estrutura de dados chave-valor avançada:**

// CRIANDO MAP
let mapa = new Map();

// MÉTODOS PRINCIPAIS
mapa.set("nome", "Maria");        // Adicionar
mapa.set(1, "número um");         // Chave pode ser qualquer tipo
mapa.get("nome");                 // "Maria" - Obter valor
mapa.has("nome");                 // true - Verificar existência
mapa.delete("nome");              // Remover
mapa.size;                        // Número de elementos

// ITERANDO SOBRE MAP
for (let [chave, valor] of mapa) {
    console.log(chave, valor);
}

// CONVERTENDO PARA/FROM OBJETO
let obj = Object.fromEntries(mapa);
let novoMapa = new Map(Object.entries(obj));

🔍 **REGULAR EXPRESSIONS (Regex):**

// CRIANDO REGEX
let regex1 = /padrao/;                    // Literal
let regex2 = new RegExp("padrao");        // Construtor

// FLAGS
let regex3 = /hello/i;    // i = case insensitive
let regex4 = /hello/g;    // g = global (todas ocorrências)

// MÉTODOS COMUNS
/hey/.test("hey there");          // true - verifica
"hello world".match(/hello/);     // ["hello"] - encontra
"hello world".replace(/world/, "JavaScript");  // Substitui

// SINTAXE BÁSICA
let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
let numeroRegex = /\\d+/;          // Um ou mais dígitos
let palavraRegex = /\\w+/;         // Caracteres de palavra

📦 **MÓDULOS ES6 - Organizando código em arquivos:**

// EXPORTAÇÃO NOMEADA (math.js)
export function soma(a, b) {
    return a + b;
}

export const PI = 3.14159;
export default class Calculadora { }  // Exportação padrão

// IMPORTAÇÃO (app.js)
import { soma, PI } from './math.js';
import Calculadora from './math.js';  // Importação padrão

// IMPORTAR TUDO
import * as matematica from './math.js';

🛠️ **EXEMPLOS PRÁTICOS AVANÇADOS:**

// 1. SISTEMA DE CARRINHO DE COMPRAS
class Carrinho {
    constructor() {
        this.itens = new Map();
    }
    
    adicionar(produto, quantidade = 1) {
        if (this.itens.has(produto.id)) {
            let atual = this.itens.get(produto.id);
            this.itens.set(produto.id, { ...atual, quantidade: atual.quantidade + quantidade });
        } else {
            this.itens.set(produto.id, { produto, quantidade });
        }
    }
    
    calcularTotal() {
        return [...this.itens.values()].reduce((total, item) => {
            return total + (item.produto.preco * item.quantidade);
        }, 0);
    }
}

// 2. VALIDAÇÃO AVANÇADA COM REGEX
const validadores = {
    email: (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email),
    telefone: (tel) => /^\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}$/.test(tel),
    cpf: (cpf) => /^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/.test(cpf)
};

// 3. FUNÇÃO DE DEBOUNCE (otimização de performance)
function debounce(funcao, tempo) {
    let timeout;
    return function executada(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => funcao.apply(this, args), tempo);
    };
}

// Uso: input.addEventListener('input', debounce(buscar, 500));

🎯 **RECURSOS AVANÇADOS ÚTEIS:**

// OPTIONAL CHAINING (?.) - Acesso seguro
let cidade = usuario?.endereco?.cidade;  // undefined se qualquer parte for null/undefined

// NULLISH COALESCING (??) - Valores padrão
let nome = input ?? "Visitante";  // Só usa "Visitante" se input for null/undefined

// PROMISE.ALL - Múltiplas promises
let [usuario, posts] = await Promise.all([
    fetch('/usuario/1'),
    fetch('/usuario/1/posts')
]);

💡 **BENEFÍCIOS DOS RECURSOS MODERNOS:**
• Código mais limpo e legível
• Menos propenso a erros
• Melhor performance
• Manutenção mais fácil

⚠️ **CONSIDERAÇÕES:**
• Verifique suporte do navegador para funcionalidades novas
• Use Babel para compatibilidade com navegadores antigos
• Teste sempre em diferentes ambientes`
    },


    "git-comandos": {
        title: "🛠️ Git - Controle de Versão e Comandos Essenciais",
        content: `📚 **GIT - Sistema de Controle de Versão**
Rastreia mudanças no código e facilita trabalho em equipe.

🎯 **CONCEITOS FUNDAMENTAIS:**

• REPOSITÓRIO (repo) - Projeto versionado
• COMMIT - "Snapshot" das mudanças
• BRANCH - Linha de desenvolvimento paralela
• MERGE - Unir branches
• REMOTE - Repositório na nuvem (GitHub, GitLab)

🔄 **FLUXO DE TRABALHO BÁSICO:**

[ Working Directory ] → [ Staging Area ] → [ Repository ]
     (arquivos locais)      (preparados)      (commits)

🚀 **COMANDOS ESSENCIAIS:**

# INICIALIZAR REPOSITÓRIO
git init                        # Cria novo repositório
git clone https://github.com/usuario/projeto.git  # Clona existente

# STATUS E INFORMAÇÕES
git status                      # Mostra estado dos arquivos
git log                         # Histórico de commits
git diff                        # Mostra diferenças não commitadas

# ADICIONAR E COMMITAR
git add arquivo.txt             # Adiciona arquivo específico
git add .                       # Adiciona TODOS os arquivos
git commit -m "Mensagem"        # Cria commit com descrição

# TRABALHANDO COM BRANCHES
git branch                      # Lista branches
git branch nova-feature         # Cria nova branch
git checkout nova-feature       # Muda para branch
git checkout -b nova-feature    # Cria E muda para branch

# SINCRONIZAR COM REMOTO
git push origin main            # Envia commits para repositório remoto
git pull origin main            # Baixa E integra alterações do remoto
git fetch origin                # Baixa alterações mas NÃO integra

📥 **GIT PULL vs GIT FETCH:**

# GIT PULL = FETCH + MERGE (automático)
git pull origin main
# ↑ Equivale a ↓
git fetch origin
git merge origin/main

# GIT FETCH - Apenas baixa (mais seguro)
git fetch origin                # Baixa atualizações
git merge origin/main           # Integra manualmente

🛠️ **CENÁRIOS PRÁTICOS:**

# CENÁRIO 1: Primeiro dia no projeto
git clone https://github.com/empresa/projeto.git
cd projeto
git checkout -b minha-feature

# CENÁRIO 2: Desenvolvimento diário
git status                      # Ver o que mudou
git add .                       # Preparar mudanças
git commit -m "Adiciona funcionalidade X"
git push origin minha-feature   # Enviar para revisão

# CENÁRIO 3: Atualizar com changes do time
git checkout main
git pull origin main            # Baixar atualizações
git checkout minha-feature
git merge main                  # Trazer updates para minha branch

🔧 **COMANDOS AVANÇADOS ÚTEIS:**

# DESFAZENDO COISAS
git reset --soft HEAD~1         # Remove commit mas mantém mudanças
git reset --hard HEAD~1         # Remove commit E mudanças (CUIDADO!)
git checkout -- arquivo.txt     # Descarta mudanças não commitadas

# TRABALHANDO COM STASH
git stash                       # Guarda mudanças temporariamente
git stash pop                   # Recupera mudanças guardadas

# CONFIGURAÇÃO
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

🎯 **BOAS PRÁTICAS GIT:**

• Commits atômicos (uma mudança por commit)
• Mensagens de commit claras e descritivas
• Trabalhe em branches separadas para cada feature
• Sempre faça pull antes de começar a trabalhar
• Revise código antes de merge para main

⚠️ **ERROS COMUNS:**

• Commitar arquivos sensíveis (senhas, keys)
• Esquecer de fazer pull antes de trabalhar
• Mensagens de commit vagas ("update", "fix")
• Trabalhar diretamente na branch main

💡 **DICAS PARA TRABALHO EM EQUIPE:**

# VERIFICAR MUDANÇAS DE OUTRAS PESSOAS
git log --oneline --graph --decorate --all

# INTEGRAR BRANCH DE COLEGA
git fetch origin
git checkout --track origin/feature-colega

# RESOLVER CONFLITOS DE MERGE
# 1. Editar arquivos com conflitos (<<<<<<< HEAD ... >>>>>>> branch)
# 2. git add arquivos-resolvidos
# 3. git commit -m "Resolve merge conflicts"

🛡️ **COMANDOS DE SEGURANÇA:**

# VERIFICAR ANTES DE COMMITAR
git status
git diff

# VER HISTÓRICO DETALHADO
git log --oneline -10          # Últimos 10 commits
git show COMMIT_HASH           # Detalhes de commit específico

# BACKUP DE BRANCH IMPORTANTE
git branch backup-minha-feature minha-feature`
    }
};

// Função para carregar o material de estudo
function loadStudyMaterial() {
    const studyContent = document.getElementById('studyContent');
    
    if (!studyContent) {
        console.error('Elemento studyContent não encontrado!');
        return;
    }
    
    // Criar menu de tópicos organizado por categoria
    let studyHTML = `
        <div class="topic-menu">
            <h3>📚 Material de Estudo Completo</h3>
            
            <div class="topic-category">
                <h4>🌐 HTML Fundamentos</h4>
                <div class="topic-buttons">
                    <button class="topic-btn active" onclick="showTopic('html-estrutura-basica')">
                        📚 Estrutura HTML
                    </button>
                </div>
            </div>
            
            <div class="topic-category">
                <h4>🎨 CSS Estilização</h4>
                <div class="topic-buttons">
                    <button class="topic-btn" onclick="showTopic('css-sintaxe-seletores')">
                        🎨 Sintaxe e Seletores
                    </button>
                </div>
            </div>
            
            <div class="topic-category">
                <h4>💻 JavaScript Básico</h4>
                <div class="topic-buttons">
                    <button class="topic-btn" onclick="showTopic('javascript-variaveis-tipos')">
                        🔤 Variáveis e Tipos
                    </button>
                    <button class="topic-btn" onclick="showTopic('javascript-funcoes')">
                        🎯 Funções
                    </button>
                </div>
            </div>
            
            <div class="topic-category">
                <h4>🔧 JavaScript Intermediário</h4>
                <div class="topic-buttons">
                    <button class="topic-btn" onclick="showTopic('javascript-arrays-objetos')">
                        📊 Arrays e Objetos
                    </button>
                </div>
            </div>
            
            <div class="topic-category">
                <h4>⚡ JavaScript Avançado</h4>
                <div class="topic-buttons">
                    <button class="topic-btn" onclick="showTopic('javascript-dom-eventos')">
                        🌐 DOM e Eventos
                    </button>
                    <button class="topic-btn" onclick="showTopic('javascript-avancado')">
                        🚀 Recursos ES6+
                    </button>
                </div>
            </div>
            
            <div class="topic-category">
                <h4>🛠️ Ferramentas</h4>
                <div class="topic-buttons">
                    <button class="topic-btn" onclick="showTopic('git-comandos')">
                        📚 Git e Comandos
                    </button>
                </div>
            </div>
        </div>
        
        <div class="topic-content" id="topicContent">
            <div class="topic-header">
                <h2>📚 HTML - Estrutura Básica e Tags Fundamentais</h2>
            </div>
            <div class="topic-body">
                <pre>${studyMaterial['html-estrutura-basica'].content}</pre>
            </div>
        </div>
        
        <div class="study-tips">
            <h4>💡 Dicas de Estudo:</h4>
            <ul>
                <li><strong>Comece pelo básico:</strong> HTML → CSS → JavaScript</li>
                <li><strong>Pratique sempre:</strong> Crie pequenos projetos</li>
                <li><strong>Use este material:</strong> Consulte durante o quiz</li>
                <li><strong>Não decore:</strong> Entenda os conceitos</li>
            </ul>
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
    
    // Marcar botão atual como ativo
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
    
    // Rolagem suave para o topo do conteúdo
    topicContent.scrollIntoView({ behavior: 'smooth' });
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

console.log('Study.js carregado com sucesso! Material completo disponível.');