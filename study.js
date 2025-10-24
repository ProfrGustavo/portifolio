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