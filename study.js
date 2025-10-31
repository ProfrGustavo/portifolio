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
    },

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
    }
};

// ... (AS FUNÇÕES loadStudyMaterial, showTopic, toggleStudyColumn PERMANECEM EXATAMENTE COMO ESTAVAM NO SEU CÓDIGO ORIGINAL) ...

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