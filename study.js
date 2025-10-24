// study.js - Material de Referência Educacional Completo
const studyMaterial = {
    "css-cores": {
        title: "🎨 CSS - Cores e Propriedades",
        content: `
CSS (Cascading Style Sheets) é usado para estilizar páginas web.

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
}
        `
    },
    "javascript-funcoes": {
        title: "⚡ JavaScript - Funções",
        content: `
Funções são blocos de código reutilizáveis que realizam tarefas específicas.

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
const quadrado = x => x * x;
        `
    },
    "html-links": {
        title: "🌐 HTML - Links e Tags",
        content: `
HTML (HyperText Markup Language) define a estrutura das páginas web.

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
• <script> é para CÓDIGO JavaScript
        `
    },
    "javascript-arrays": {
        title: "📊 JavaScript - Arrays",
        content: `
Arrays são estruturas que armazenam coleções de dados.

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
let tamanho = frutas.length;  // Retorna 2
        `
    },
    "css-linguagem": {
        title: "🎨 CSS - O que é CSS",
        content: `
📌 CSS significa: Cascading Style Sheets
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
• Design consistente
        `
    },
    "javascript-loops": {
        title: "⚡ JavaScript - Loops For",
        content: `
Loops repetem um bloco de código várias vezes.

📌 Estrutura do FOR:
for (inicialização; condição; incremento) {
    // código a ser repetido
}

📌 Partes do For:
• Inicialização: let i = 0 (executa UMA vez)
• Condição: i < 5 (verifica a CADA repetição)  
• Incremento: i++ (executa após CADA repetição)

📌 Exemplo: Imprimir números de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(i);  // Imprime 1, 2, 3, 4, 5
}

📌 Funcionamento:
1. let i = 1 (inicializa i com 1)
2. i <= 5? (verifica se i é menor ou igual a 5)
3. Se SIM: executa console.log(i)
4. i++ (incrementa i para 2)
5. Volta para o passo 2

📌 Variável do Loop:
• i é a variável de controle
• Pode ser qualquer nome (j, contador, index)
• É acessível apenas DENTRO do loop
        `
    },
    "css-significado": {
        title: "🎨 CSS - Cascading Style Sheets",
        content: `
📌 CSS = Cascading Style Sheets
(Folhas de Estilo em Cascata)

📌 Por que "Cascading" (em Cascata)?
• Estilos são aplicados em ORDEM
• Regras mais específicas sobrescrevem as gerais
• Herança de estilos dos elementos pais

📌 Exemplo de Cascata:
/* Regra geral */
p { color: black; }

/* Regra mais específica */
.container p { color: blue; }  /* Esta prevalece */

📌 Componentes do CSS:
• Seletores: .classe, #id, elemento
• Propriedades: color, font-size, margin
• Valores: red, 16px, 10px 20px

📌 História:
• Criado em 1996 por Håkon Wium Lie
• Permitiu separar conteúdo (HTML) de estilo
• Revolucionou o design web
        `
    },
    "javascript-condicionais": {
        title: "⚡ JavaScript - Condicionais IF",
        content: `
Condicionais permitem executar código baseado em condições.

📌 Estrutura do IF:
if (condição) {
    // código executado se condição for TRUE
}

📌 Operadores de Comparação:
• >   maior que
• <   menor que  
• >=  maior ou igual
• <=  menor ou igual
• === igualdade estrita (valor E tipo)
• ==  igualdade (apenas valor)

📌 Exemplos:
let numero = 15;

if (numero > 10) {
    console.log("Maior que 10");
}

if (numero === 15) {
    console.log("Exatamente 15");
}

📌 Variáveis em Condições:
• A condição verifica o VALOR da variável
• A variável deve estar DECLARADA antes
• Pode ser qualquer tipo de variável

let idade = 20;
let nome = "João";

if (idade >= 18) {
    console.log(nome + " é maior de idade");
}
        `
    },
    "javascript-variaveis": {
        title: "⚡ JavaScript - Variáveis",
        content: `
Variáveis armazenam dados que podem ser usados no código.

📌 Formas de Declarar Variáveis:

1. let - variável que pode ser alterada
   let nome = "Maria";
   nome = "João";  // ✅ Pode mudar

2. const - constante (NÃO pode mudar)
   const PI = 3.14;
   PI = 3.15;      // ❌ ERRO! Constante

3. var - forma antiga (evitar)
   var idade = 25;

📌 Boas Práticas:
• Use const por padrão
• Use let apenas quando precisar mudar o valor
• Evite var (tem problemas de escopo)

📌 Exemplos:
const url = "https://meusite.com";  // Não muda
let contador = 0;                   // Pode mudar
contador = 1;                       // ✅ Permitido

📌 Nomeação:
• Comece com letra, _ ou $
• Use camelCase: meuNome, contadorVisitas
• Nomes descritivos: idade, email, precoTotal
        `
    },
    "javascript-dom": {
        title: "🌐 JavaScript - DOM",
        content: `
DOM (Document Object Model) representa a página web como objetos.

📌 Selecionando Elementos:

• Por ID (retorna UM elemento):
  document.getElementById("meuId")

• Por Seletor CSS (retorna PRIMEIRO):
  document.querySelector(".minhaClasse")

• Por Classe (retorna TODOS):
  document.getElementsByClassName("classe")

📌 Exemplos:
// HTML: <div id="titulo">Olá</div>
let titulo = document.getElementById("titulo");

// HTML: <button class="botao">Clique</button>  
let botao = document.querySelector(".botao");

📌 Métodos Comuns:
• getElementById() - mais rápido para IDs únicos
• querySelector() - flexível com seletores CSS
• getElementsByClassName() - múltiplos elementos

📌 Uso Prático:
<button id="meuBotao">Clique Aqui</button>

<script>
let botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
    alert("Botão clicado!");
});
</script>
        `
    },
    "javascript-comentarios": {
        title: "💬 JavaScript - Comentários",
        content: `
Comentários são textos ignorados pelo JavaScript, usados para documentação.

📌 Tipos de Comentários:

1. Comentário de Uma Linha:
   // Este é um comentário de uma linha
   let x = 10;  // Comentário após código

2. Comentário de Múltiplas Linhas:
   /*
   Este é um comentário
   que ocupa várias linhas
   útil para documentação longa
   */

📌 Quando Usar Comentários:
• Explicar código complexo
• Desativar código temporariamente
• Documentar funções e parâmetros
• Explicar a lógica de algoritmos

📌 Exemplos:
// Calcula área do retângulo
function area(largura, altura) {
    return largura * altura;
}

let preco = 100;
// let desconto = preco * 0.1;  // Código desativado
let total = preco;  // Sem desconto por enquanto

📌 Boas Práticas:
• Comentários claros e objetivos
• Evitar comentários óbvios
• Manter comentários atualizados
• Usar para explicar "porquê" não "o quê"
        `
    },
    "javascript-operadores": {
        title: "🔢 JavaScript - Operadores",
        content: `
Operadores realizam operações com valores e variáveis.

📌 Operadores Aritméticos:
• +   Adição: 5 + 3 = 8
• -   Subtração: 10 - 4 = 6  
• *   Multiplicação: 3 * 4 = 12
• /   Divisão: 15 / 3 = 5
• %   Módulo (resto da divisão): 10 % 3 = 1

📌 Exemplos:
let soma = 5 + 3;           // 8
let subtracao = 10 - 4;     // 6
let multiplicacao = 3 * 4;  // 12
let divisao = 15 / 3;       // 5
let resto = 10 % 3;         // 1 (resto da divisão)

📌 Operador Módulo (%):
• Retorna o RESTO da divisão
• Útil para verificar números pares/ímpares
• 10 % 2 = 0 (par), 11 % 2 = 1 (ímpar)

📌 Quadrado de um Número:
function quadrado(x) {
    return x * x;  // x multiplicado por si mesmo
}

quadrado(5);  // 25
quadrado(3);  // 9
        `
    },
    "javascript-metodos-array": {
        title: "📊 Métodos de Array - Adicionar",
        content: `
Arrays têm métodos para manipular seus elementos.

📌 Adicionar Elementos:

• push() - Adiciona no FINAL do array
• unshift() - Adiciona no INÍCIO do array

📌 Remover Elementos:
• pop() - Remove do FINAL do array  
• shift() - Remove do INÍCIO do array

📌 Exemplos:
let frutas = ["maçã", "banana"];

// ADICIONAR
frutas.push("laranja");    // ["maçã", "banana", "laranja"]
frutas.unshift("uva");     // ["uva", "maçã", "banana", "laranja"]

// REMOVER  
frutas.pop();              // ["uva", "maçã", "banana"]
frutas.shift();            // ["maçã", "banana"]

📌 Características:
• push/pop - trabalham no FINAL (mais eficientes)
• unshift/shift - trabalham no INÍCIO (menos eficientes)
• Todos modificam o array original
• Retornam o elemento adicionado/removido
        `
    },
    "javascript-objetos": {
        title: "📦 JavaScript - Objetos",
        content: `
Objetos armazenam dados como pares chave-valor.

📌 Criando Objetos:

1. Sintaxe literal (mais comum):
   let pessoa = {
       nome: "João",
       idade: 30,
       cidade: "São Paulo"
   };

2. Construtor Object (menos usado):
   let carro = new Object();
   carro.marca = "Ford";
   carro.ano = 2020;

📌 Acessando Propriedades:

// Notação de ponto (mais comum)
console.log(pessoa.nome);    // "João"

// Notação de colchetes (dinâmica)
console.log(pessoa["idade"]); // 30

📌 Objeto Vazio:
let vazio = {};                    // Sintaxe literal
let vazio2 = new Object();         // Construtor
let vazio3 = Object.create(null);  // Método moderno

📌 Métodos em Objetos:
let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    // Método moderno
    multiplicar(a, b) {
        return a * b;
    }
};

calculadora.soma(2, 3);  // 5
        `
    },
    "html-script": {
        title: "🌐 HTML - Tag Script",
        content: `
A tag <script> é usada para incluir ou escrever JavaScript em HTML.

📌 Incluir JavaScript Externo:
<script src="caminho/para/arquivo.js"></script>

📌 JavaScript Direto no HTML:
<script>
    // Código JavaScript aqui
    alert("Olá Mundo!");
</script>

📌 Atributos Importantes:
• src - especifica o arquivo JavaScript externo
• type - tipo do script (normalmente omitido)
• async/defer - controle de carregamento

📌 Posicionamento:
<!-- NO FINAL do <body> para performance -->
<body>
    <!-- conteúdo HTML -->
    <script src="meu-script.js"></script>
</body>

📌 Exemplos Corretos:
<!-- Incluir arquivo externo -->
<script src="app.js"></script>

<!-- Código inline -->
<script>
    document.getElementById("titulo").textContent = "Olá";
</script>

📌 Tags Relacionadas:
• <script> - para JavaScript
• <link> - para CSS (NÃO para scripts)
• <style> - para CSS interno
        `
    },
    "javascript-igualdade": {
        title: "⚡ JavaScript - Igualdade",
        content: `
JavaScript tem dois tipos de operadores de igualdade.

📌 Igualdade Estrita (===):
• Compara VALOR e TIPO
• Não faz conversão de tipo
• RECOMENDADO usar sempre

📌 Igualdade Solta (==):
• Compara apenas VALOR
• Faz conversão automática de tipo
• Pode causar resultados inesperados

📌 Exemplos:
5 === 5     // true (mesmo valor e tipo)
5 === "5"   // false (número ≠ string)

5 == 5      // true  
5 == "5"    // true (converte string para número)

0 === false // false (número ≠ boolean)
0 == false  // true (converte boolean para número)

📌 Regra Geral:
• SEMPRE use === (igualdade estrita)
• Evite == (pode causar bugs difíceis)
• Use !== para desigualdade estrita

📌 Por que evitar ==?
// Comportamento inesperado:
"" == false     // true
null == undefined // true
[] == false     // true
        `
    },
    "css-propriedades": {
        title: "🎨 CSS - Propriedades de Texto",
        content: `
CSS tem propriedades específicas para estilizar texto.

📌 Propriedades de Cor e Texto:
color: #27ae60;          /* Cor do TEXTO */
background-color: #fff;   /* Cor de FUNDO */
font-size: 16px;         /* Tamanho da fonte */
font-weight: bold;       /* Peso da fonte */

📌 text-color vs color:
• color: define cor do TEXTO
• NÃO existe text-color no CSS
• background-color: define cor do FUNDO

📌 Exemplos Corretos:
.titulo {
    color: blue;              /* Texto azul */
    background-color: yellow; /* Fundo amarelo */
}

.paragrafo {
    color: #333;              /* Texto cinza escuro */
    font-size: 18px;
}

📌 Valores de Cor:
• Nomes: red, blue, green, black, white
• Hexadecimal: #ff0000, #27ae60, #3498db
• RGB: rgb(255, 0, 0), rgb(39, 174, 96)
• HSL: hsl(0, 100%, 50%)

📌 Herança:
• color é herdada por elementos filhos
• background-color NÃO é herdada
        `
    },
    "javascript-eventos": {
        title: "🎯 JavaScript - Eventos",
        content: `
Eventos são ações que ocorrem na página (cliques, teclas, etc).

📌 Eventos Comuns:
• 'click' - clique do mouse
• 'mouseover' - mouse sobre elemento
• 'keydown' - tecla pressionada
• 'load' - página carregada
• 'submit' - formulário enviado

📌 Como Registrar Eventos:

1. addEventListener() (MODERNO):
   elemento.addEventListener('click', função);

2. Propriedade onclick (ANTIGO):
   elemento.onclick = função;

📌 Exemplo com addEventListener:
<button id="meuBotao">Clique Aqui</button>

<script>
document.getElementById("meuBotao")
    .addEventListener("click", function() {
        alert("Botão clicado!");
    });
</script>

📌 Vantagens do addEventListener:
• Pode múltiplos ouvintes para mesmo evento
• Mais controle (opções de captura)
• Melhor separação de concerns

📌 Sintaxe:
elemento.addEventListener(tipo, função, opções);
        `
    },
    "javascript-strings": {
        title: "📝 JavaScript - Métodos de String",
        content: `
Strings têm métodos para manipulação de texto.

📌 Métodos de Transformação:

• toUpperCase() - converte para MAIÚSCULAS
• toLowerCase() - converte para minúsculas
• trim() - remove espaços do início/fim

📌 Exemplos:
let texto = "Hello World";

texto.toUpperCase();    // "HELLO WORLD"
texto.toLowerCase();    // "hello world"  

let comEspacos = "  texto  ";
comEspacos.trim();      // "texto"

📌 Características:
• NÃO modificam a string original
• Retornam NOVA string modificada
• Strings são imutáveis em JavaScript

📌 Uso Prático:
let nome = "joão silva";
let nomeFormatado = nome.toUpperCase();  // "JOÃO SILVA"

let inputUsuario = "  email@exemplo.com  ";
let emailLimpo = inputUsuario.trim();    // "email@exemplo.com"

📌 Outros Métodos Úteis:
• includes() - verifica se contém texto
• slice() - extrai parte da string
• replace() - substitui texto
• split() - divide string em array
        `
    },
    "javascript-promises": {
        title: "⏳ JavaScript - Promises",
        content: `
Promises representam operações assíncronas que podem ser concluídas no futuro.

📌 Criando uma Promise:
let promessa = new Promise((resolve, reject) => {
    // Código assíncrono aqui
    if (sucesso) {
        resolve(resultado);
    } else {
        reject(erro);
    }
});

📌 Palavra-chave NEW:
• new Promise() - cria uma NOVA instância
• Promise é um construtor built-in
• Sem new, dá erro

📌 Estados da Promise:
• pending: operação em andamento
• fulfilled: concluída com sucesso
• rejected: falhou com erro

📌 Exemplo Simples:
let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dados carregados!");
    }, 2000);
});

promessa.then(resultado => {
    console.log(resultado);  // "Dados carregados!"
});

📌 Usando Promises:
• then() - para sucesso
• catch() - para erros
• finally() - sempre executa
        `
    },
    "estruturas-dados": {
        title: "🏗️ Estruturas de Dados - Pilha",
        content: `
Estruturas de dados organizam e armazenam dados de forma eficiente.

📌 Princípio LIFO:
• LIFO = Last In, First Out
• Último a entrar, primeiro a sair
• Como uma pilha de pratos

📌 Pilha (Stack):
• push() - adiciona no topo
• pop() - remove do topo
• Último elemento adicionado é o primeiro removido

📌 Fila (Queue):
• FIFO = First In, First Out  
• Primeiro a entrar, primeiro a sair
• Como fila de banco

📌 Exemplo Pilha:
let pilha = [];
pilha.push("A");  // ["A"]
pilha.push("B");  // ["A", "B"] 
pilha.push("C");  // ["A", "B", "C"]
pilha.pop();      // "C" - último a entrar, primeiro a sair

📌 Exemplo Fila:
let fila = [];
fila.push("A");   // ["A"]
fila.push("B");   // ["A", "B"]
fila.push("C");   // ["A", "B", "C"]  
fila.shift();     // "A" - primeiro a entrar, primeiro a sair

📌 Aplicações:
• Pilha: histórico do navegador, chamadas de função
• Fila: impressão, processamento de pedidos
        `
    },
    "javascript-math": {
        title: "🔢 JavaScript - Objeto Math",
        content: `
Math é um objeto built-in com propriedades e métodos matemáticos.

📌 Métodos de Arredondamento:

• Math.round() - arredonda para inteiro mais próximo
• Math.floor() - arredonda para BAIXO
• Math.ceil() - arredonda para CIMA

📌 Exemplos:
Math.round(3.7);   // 4 (mais próximo)
Math.round(3.2);   // 3 (mais próximo)

Math.floor(3.7);   // 3 (sempre para baixo)
Math.floor(3.2);   // 3

Math.ceil(3.7);    // 4 (sempre para cima)  
Math.ceil(3.2);    // 4

📌 Outros Métodos Úteis:
Math.random()      // número aleatório entre 0-1
Math.max(1, 5, 3)  // 5 (maior número)
Math.min(1, 5, 3)  // 1 (menor número)
Math.pow(2, 3)     // 8 (2 elevado a 3)

📌 Características:
• Math é um objeto, NÃO um construtor
• Não usa new Math()
• Métodos e propriedades são estáticos
        `
    },
    "react-hooks": {
        title: "⚛️ React - Hooks",
        content: `
Hooks são funções que permitem usar state e outros recursos do React em componentes funcionais.

📌 useState Hook:
• Gerencia estado em componentes funcionais
• Retorna [valor, funçãoParaMudar]
• Estado é preservado entre re-renderizações

📌 Exemplo Básico:
import { useState } from 'react';

function MeuComponente() {
    const [nome, setNome] = useState('');

    return (
        <input 
            value={nome}
            onChange={e => setNome(e.target.value)}
        />
    );
}

📌 Outros Hooks Importantes:
• useEffect - efeitos colaterais
• useContext - contexto global
• useReducer - estado complexo

📌 useState vs useReducer:
• useState - estado simples
• useReducer - estado complexo com lógica

📌 Regras dos Hooks:
1. Só chame Hooks no nível superior
2. Só chame Hooks de componentes React
3. Nomeie Hooks começando com "use"

📌 Vantagens:
• Código mais limpo e reutilizável
• Fácil de testar
• Melhor performance
        `
    },
    "javascript-destructuring": {
        title: "📦 JavaScript - Destructuring",
        content: `
Destructuring permite extrair valores de arrays ou objetos em variáveis separadas.

📌 Destructuring de Array:
let [primeiro, segundo] = [1, 2, 3];

// primeiro = 1
// segundo = 2
// terceiro valor (3) é ignorado

📌 Exemplos Completos:
// Array simples
let [a, b] = [10, 20];      // a=10, b=20

// Pular elementos
let [x, , z] = [1, 2, 3];   // x=1, z=3

// Valor padrão
let [nome = "Anônimo"] = []; // nome="Anônimo"

📌 Destructuring de Objeto:
let {nome, idade} = {nome: "João", idade: 30, cidade: "SP"};

// nome = "João"
// idade = 30
// cidade é ignorada

📌 Vantagens:
• Código mais limpo e legível
• Menos repetição
• Fácil extração de dados

📌 Casos de Uso:
// Retorno de função
function getCoordenadas() {
    return [40.7128, -74.0060];
}
let [lat, lng] = getCoordenadas();

// Parâmetros de função
function mostraInfo({nome, idade}) {
    console.log(nome, idade);
}
        `
    },
    "git-comandos": {
        title: "📚 Git - Comandos Básicos",
        content: `
Git é um sistema de controle de versão para rastrear mudanças no código.

📌 Comandos de Download/Upload:

• git pull - BAIXA e INTEGRA alterações do repositório remoto
• git push - ENVIA alterações para o repositório remoto
• git clone - COPIA um repositório pela primeira vez
• git fetch - BAIXA alterações mas NÃO integra

📌 Fluxo de Trabalho Típico:
1. git pull                 # Baixa atualizações
2. Trabalha no código       # Faz mudanças
3. git add .                # Prepara mudanças
4. git commit -m "mensagem" # Salva com descrição
5. git push                 # Envia para repositório

📌 Diferenças Importantes:
• git pull = git fetch + git merge
• git clone - usa apenas na PRIMEIRA vez
• git pull - usa para ATUALIZAR regularmente

📌 Exemplos:
# Primeira vez no projeto
git clone https://github.com/usuario/projeto.git

# Diariamente - atualizar
git pull origin main

# Enviar mudanças
git push origin main

📌 Resolução de Conflitos:
• git pull pode causar conflitos
• Resolva os conflitos manualmente
• Depois git add e git commit
        `
    },
    "javascript-fetch": {
        title: "🌐 JavaScript - Fetch API",
        content: `
Fetch API fornece uma interface para fazer requisições HTTP.

📌 Requisição GET Básica:
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));

📌 response.json():
• Converte a resposta em objeto JavaScript
• Retorna uma Promise
• Necessário para acessar os dados

📌 Métodos de Response:
• response.json() - para dados JSON
• response.text() - para texto simples
• response.blob() - para arquivos binários

📌 Exemplo Completo:
// Buscar dados de usuário
fetch('https://api.github.com/users/octocat')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();  // ← CONVERTE para JSON
    })
    .then(usuario => {
        console.log(usuario.name);
        console.log(usuario.location);
    })
    .catch(error => {
        console.error('Falha:', error);
    });

📌 Por que usar .json()?
• A resposta vem como texto/bytes
• .json() parseia o texto para objeto
• Permite acessar propriedades como usuario.name
        `
    },
    "javascript-json": {
        title: "📄 JavaScript - JSON",
        content: `
JSON (JavaScript Object Notation) é formato para troca de dados.

📌 JSON.parse():
• Converte string JSON em objeto JavaScript
• JSON para → Objeto

📌 JSON.stringify():
• Converte objeto JavaScript em string JSON  
• Objeto para → JSON

📌 Exemplos:
// String JSON para Objeto
let jsonString = '{"nome":"João","idade":30}';
let objeto = JSON.parse(jsonString);
console.log(objeto.nome);  // "João"

// Objeto para String JSON
let pessoa = {nome: "Maria", idade: 25};
let json = JSON.stringify(pessoa);
console.log(json);  // '{"nome":"Maria","idade":25}'

📌 Casos de Uso:
• JSON.parse() - quando RECEBE dados do servidor
• JSON.stringify() - quando ENVIA dados para servidor

📌 Diferenças do Objeto JavaScript:
// JavaScript Object
let obj = {nome: "João", idade: 30};

// JSON (string)
let json = '{"nome":"João","idade":30}';

📌 Características JSON:
• Chaves DEVEM ter aspas duplas
• Não suporta funções/comentários
• Tipos suportados: string, number, boolean, null, array, object
        `
    },
    "javascript-async-await": {
        title: "⏳ JavaScript - Async/Await",
        content: `
Async/Await é syntax sugar para trabalhar com Promises de forma síncrona.

📌 Função Assíncrona:
async function nomeDaFuncao() {
    // Pode usar await aqui
}

📌 Palavra-chave ASYNC:
• Torna a função assíncrona
• Sempre retorna uma Promise
• Permite usar AWAIT dentro dela

📌 Palavra-chave AWAIT:
• Pausa a execução até Promise resolver
• Só funciona dentro de funções async
• Retorna o valor resolvido da Promise

📌 Exemplo:
async function buscarDados() {
    let response = await fetch('https://api.com/data');
    let data = await response.json();
    return data;
}

// Uso:
buscarDados().then(data => console.log(data));

📌 Equivalente com Promises:
function buscarDados() {
    return fetch('https://api.com/data')
        .then(response => response.json());
}

📌 Vantagens do Async/Await:
• Código mais limpo e legível
• Melhor tratamento de erros com try/catch
• Menos callbacks aninhados
        `
    },
    "css-seletores": {
        title: "🎨 CSS - Seletores",
        content: `
Seletores CSS definem quais elementos receberão os estilos.

📌 Tipos de Seletores:

• Por Classe: