const questionBank = [
    {
        question: "Analise este cenário: 'João recebeu uma mensagem urgente pedindo seus dados bancários para resolver um suposto problema técnico. A mensagem vinha de um número desconhecido e pedia ação imediata.' Qual conceito de segurança digital melhor se aplica a essa situação?",
        options: [
            "Phishing - tentativa de obter informações sensíveis através de falsas identidades",
            "Vishing - fraude por chamada telefônica",
            "Smishing - phishing por mensagens de texto SMS",
            "Quid pro quo - oferta de benefícios em troca de informações"
        ],
        correct: 2
    },
    {
        question: "Considere este trecho sobre IAs generativas: 'As ferramentas de IA generativa podem criar conteúdo original, mas dependem de dados de treinamento que podem conter vieses humanos.' Qual afirmação melhor explica o paradoxo apresentado?",
        options: [
            "IAs são completamente imparciais por natureza técnica",
            "A originalidade da IA é limitada pelos dados humanos que a alimentam",
            "Vieses em IAs são sempre intencionais dos desenvolvedores",
            "IAs generativas não precisam de dados de treinamento"
        ],
        correct: 1
    },
    {
        question: "Leia esta situação: 'Uma escola implementou sistema de vigilância por IA que analisa expressões faciais dos alunos para medir engajamento. Alguns pais questionam a privacidade.' Qual princípio da LGPD está sendo mais diretamente violado?",
        options: [
            "Finalidade - a coleta deve ter propósito específico",
            "Transparência - os afetados devem saber sobre o tratamento de dados",
            "Segurança - proteção contra acessos não autorizados",
            "Livro acesso - facilitar consulta sobre os dados"
        ],
        correct: 0
    },
    {
        question: "Analise este caso: 'Um algoritmo de contratação usando IA rejeitou sistematicamente candidatas mulheres para cargos técnicos, replicando padrões históricos do setor.' Qual conceito explica esse fenômeno?",
        options: [
            "Machine learning supervisionado",
            "Viés algorítmico por dados enviesados",
            "Overfitting técnico",
            "Processamento de linguagem natural"
        ],
        correct: 1
    },
    {
        question: "Considere este debate: 'As IAs generativas na educação: ferramenta de apoio ao aprendizado ou atalho para a preguiça intelectual?' Qual análise apresenta melhor equilíbrio?",
        options: [
            "São apenas prejudiciais e devem ser banidas das escolas",
            "São neutras - o resultado depende exclusivamente do usuário",
            "Podem ampliar desigualdades se não houver acesso universal",
            "Devem substituir totalmente os métodos tradicionais"
        ],
        correct: 2
    },
    {
        question: "Leia este cenário futurista: 'Em 2030, IAs diagnosticam doenças com 98% de precisão, mas médicos humanos ainda são necessários para o contexto emocional do paciente.' Qual competência se torna MAIS valiosa nesse contexto?",
        options: [
            "Inteligência emocional e empatia",
            "Velocidade de processamento de dados",
            "Memória para informações médicas",
            "Habilidade com equipamentos tecnológicos"
        ],
        correct: 0
    },
    {
        question: "Analise este dilema ético: 'Uma IA de recomendação maximiza engajamento mostrando conteúdo radicalizante, criando bolhas ideológicas. Quem é responsável?' Qual perspectiva é mais adequada?",
        options: [
            "Apenas os usuários, por escolherem o conteúdo",
            "Exclusivamente os desenvolvedores do algoritmo",
            "Responsabilidade compartilhada entre plataforma, desenvolvedores e usuários",
            "As IAs deveriam ter responsabilidade legal própria"
        ],
        correct: 2
    },
    {
        question: "Considere esta afirmação: 'A automação por IA eliminou 30% dos empregos administrativos, mas criou 15% em novas áreas tech.' Qual análise econômica é mais precisa?",
        options: [
            "Criação líquida de empregos sempre compensa as perdas",
            "Os novos empregos exigem qualificações diferentes das perdidas",
            "O desemprego tecnológico é mito comprovado",
            "Todos os trabalhadores afetados se requalificam facilmente"
        ],
        correct: 1
    },
    {
        question: "Leia este caso: 'Um deepfake convincente de um político falando algo comprometedor viralizou dias antes das eleições.' Qual combinação de ações seria MAIS eficaz para combater isso?",
        options: [
            "Apenas deletar o conteúdo das plataformas",
            "Educação midiática + verificação por especialistas + transparência das plataformas",
            "Bloquear todo conteúdo político online",
            "Confiar que o público discernirá a verdade"
        ],
        correct: 1
    },
    {
        question: "Analise este paradoxo: 'Quanto mais personalizado o serviço de IA, mais dados pessoais são coletados, criando tensão entre conveniência e privacidade.' Qual solução equilibra melhor esses interesses?",
        options: [
            "Coleta total de dados para máxima personalização",
            "Privacy by design - privacidade incorporada desde o desenvolvimento",
            "Renúncia completa à personalização",
            "Transparência opcional sobre coleta de dados"
        ],
        correct: 1
    },
    {
        question: "Considere este cenário de saúde: 'IA diagnostica câncer com 95% de acurácia vs médico humano com 90%. Porém, pacientes preferem explicações humanas.' Qual abordagem é mais ética?",
        options: [
            "Substituir totalmente os médicos pela IA mais precisa",
            "Manter apenas médicos humanos, ignorando a tecnologia",
            "Sistema híbrido: IA auxilia diagnóstico, médico explica e decide",
            "Deixar os pacientes escolherem sem orientação profissional"
        ],
        correct: 2
    },
    {
        question: "Leia este trecho sobre economia criativa: 'Artistas processam empresas de IA por usar suas obras sem permissão no treinamento de modelos.' Qual princípio de propriedade intelectual está em jogo?",
        options: [
            "Direito de imagem",
            "Direito autoral e uso transformativo",
            "Patente de invenção",
            "Marca registrada comercial"
        ],
        correct: 1
    },
    {
        question: "Analise esta tendência educacional: 'Escolas adotam tutores de IA 24h, mas alunos mostram dependência excessiva da ferramenta.' Qual intervenção pedagógica seria mais eficaz?",
        options: [
            "Banir todas as IAs educacionais",
            "Ensino de pensamento crítico + uso guiado da tecnologia",
            "Substituir professores por IAs completamente",
            "Ignorar o problema como fase passageira"
        ],
        correct: 1
    },
    {
        question: "Considere este dilema urbano: 'Sistema de vigilância por IA reduz criminalidade 40%, mas monitora permanentemente cidadãos inocentes.' Qual princípio democrático está mais ameaçado?",
        options: [
            "Liberdade de expressão",
            "Direito à privacidade e presunção de inocência",
            "Liberdade religiosa",
            "Direito de reunião pacífica"
        ],
        correct: 1
    },
    {
        question: "Leia esta reflexão filosófica: 'Se IAs atingirem consciência, deveriam ter direitos?' Qual perspectiva considera melhor a complexidade do tema?",
        options: [
            "Direitos iguais aos humanos independentemente de consciência",
            "Nenhum direito, pois são apenas máquinas",
            "Direitos proporcionais à sua capacidade de senciência e consciência",
            "Apenas direitos patrimoniais sobre sua criação"
        ],
        correct: 2
    },
    {
        question: "Analise este cenário climático: 'IA otimiza consumo energético de cidades, reduzindo emissões, mas requer data centers que consomem muita energia.' Qual abordagem resolve esse paradoxo?",
        options: [
            "Abandonar IAs por serem energeticamente ineficientes",
            "Ignorar o consumo energético pelos benefícios obtidos",
            "Desenvolver IAs energeticamente eficientes + energia renovável para data centers",
            "Terceirizar data centers para países em desenvolvimento"
        ],
        correct: 2
    },
    {
        question: "Considere este caso jurídico: 'IA comete erro médico - quem responde: desenvolvedor, hospital ou a própria IA?' Qual princípio legal se aplica melhor?",
        options: [
            "Responsabilidade objetiva do desenvolvedor",
            "Culpa exclusiva do profissional que usou a IA",
            "Responsabilidade solidária entre todos os envolvidos",
            "A IA como entidade legal independente"
        ],
        correct: 2
    },
    {
        question: "Leia este debate sobre autenticidade: 'Arte gerada por IA vence competição artística - é arte legítima ou trapaça tecnológica?' Qual critério de avaliação seria mais justo?",
        options: [
            "Apenas arte humana manual é arte verdadeira",
            "O resultado estético final define a qualidade artística",
            "O processo criativo e intencionalidade definem a arte",
            "Arte de IA só vale se o prompt for artisticamente complexo"
        ],
        correct: 2
    },
    {
        question: "Analise este cenário social: 'Algoritmo de redes sociais amplifica polarização para aumentar tempo de uso. Qual intervenção regula melhor esse problema?'",
        options: [
            "Proibir completamente redes sociais",
            "Transparência algorítmica obrigatória + opções de feed cronológico",
            "Deixar o mercado regular espontaneamente",
            "Controle governamental total sobre algoritmos"
        ],
        correct: 1
    },
    {
        question: "Considere este futuro do trabalho: '70% das profissões atuais serão impactadas por IA. Qual preparo educacional é mais urgente?'",
        options: [
            "Focar apenas em programação de IA",
            "Desenvolver habilidades humanas difíceis de automatizar: criatividade, empatia, pensamento crítico",
            "Especialização precoce em tarefas técnicas específicas",
            "Apostar que as profissões atuais permanecerão inalteradas"
        ],
        correct: 1
    },
    // Continua com mais 80 questões seguindo o mesmo padrão...
    {
        question: "Um sistema de IA de recrutamento rejeitou candidatos de escolas públicas, replicando desigualdades históricas. Isso demonstra:",
        options: [
            "Eficiência do algoritmo em selecionar os 'melhores'",
            "Viés algorítmico alimentado por dados históricos enviesados",
            "Neutralidade tecnológica inerente às IAs",
            "Superioridade natural de certos grupos educacionais"
        ],
        correct: 1
    },
    {
        question: "A LGPD estabelece que dados pessoais sensíveis merecem proteção especial. Qual desses NÃO é considerado dado sensível?",
        options: [
            "Opinião política",
            "Dado de saúde",
            "Origem racial ou étnica",
            "Endereço residencial"
        ],
        correct: 3
    },


     {
        question: "O fenômeno 'filter bubble' (bolha de filtro) nas redes sociais refere-se principalmente a:",
        options: [
            "Filtros de fotos que distorcem a autoimagem",
            "Algoritmos que mostram apenas conteúdo alinhado às visões existentes do usuário",
            "Sistemas de bloqueio de conteúdo inadequado",
            "Ferramentas de organização de e-mails"
        ],
        correct: 1
    },
    {
        question: "A 'Lei de Moore' previa que a capacidade de processamento dobraria a cada 2 anos. Qual impacto isso teve no desenvolvimento de IAs?",
        options: [
            "Permitiu treinar modelos cada vez mais complexos",
            "Tornou as IAs menos precisas com o tempo",
            "Diminuiu a necessidade de dados para treinamento",
            "Eliminou completamente a necessidade de hardware especializado"
        ],
        correct: 0
    },
    {
        question: "O conceito de 'singularidade tecnológica' refere-se à hipótese de que:",
        options: [
            "IAs se tornarão autônomas e superarão a inteligência humana",
            "Todos os empregos serão automatizados até 2030",
            "A internet será substituída por uma nova tecnologia",
            "Os smartphones desaparecerão em 10 anos"
        ],
        correct: 0
    },
    {
        question: "Qual destes é um exemplo de 'aprendizado por reforço' em IA?",
        options: [
            "Um sistema que melhora através de tentativa e erro com recompensas",
            "Um algoritmo que copia exatamente o comportamento humano",
            "Software que apenas segue regras pré-programadas",
            "Ferramenta que precisa ser reconfigurada manualmente para cada tarefa"
        ],
        correct: 0
    },
    {
        question: "A 'ética algorítmica' preocupa-se principalmente com:",
        options: [
            "Velocidade de processamento dos computadores",
            "Impactos sociais e morais das decisões automatizadas",
            "Custos de desenvolvimento de software",
            "Compatibilidade entre diferentes sistemas operacionais"
        ],
        correct: 1
    },
    {
        question: "O 'teste de Turing' foi proposto para avaliar:",
        options: [
            "Velocidade de processamento de computadores",
            "Capacidade de uma máquina exibir comportamento inteligente indistinguível do humano",
            "Segurança de sistemas contra hackers",
            "Eficiência energética de data centers"
        ],
        correct: 1
    },
    {
        question: "O 'efeito Cassandra' na era digital refere-se a:",
        options: [
            "Pessoas que prevêem problemas tecnológicos mas não são ouvidas",
            "Algoritmos que preveem o futuro com precisão",
            "Sistemas que armazenam grandes volumes de dados",
            "Vazamentos de informações pessoais"
        ],
        correct: 0
    },
    {
        question: "A 'Internet das Coisas' (IoT) representa risco à privacidade porque:",
        options: [
            "Dispositivos conectados coletam dados constantemente sobre nossos hábitos",
            "Torna a internet mais lenta para todos os usuários",
            "Substitui completamente os smartphones",
            "Exige que todos tenham conhecimentos avançados de programação"
        ],
        correct: 0
    },
    {
        question: "O 'right to be forgotten' (direito ao esquecimento) na internet permite que:",
        options: [
            "Pessoas removam informações desatualizadas ou prejudiciais sobre si mesmas",
            "Empresas deletem dados de clientes sem consentimento",
            "Governos apaguem partes da história que não lhes convém",
            "Usuários desativem permanentemente suas memórias digitais"
        ],
        correct: 0
    },
    {
        question: "O fenômeno 'doomscrolling' refere-se ao hábito de:",
        options: [
            "Consumir incessantemente notícias negativas nas redes sociais",
            "Jogar games violentos por longos períodos",
            "Programar durante a madrugada sem parar",
            "Comprar online de forma compulsiva"
        ],
        correct: 0
    },
    {
        question: "A 'sobrecarga de informação' na era digital pode levar a:",
        options: [
            "Maior produtividade e tomada de decisão mais acertada",
            "Dificuldade de concentração e ansiedade decisionál",
            "Redução do uso de redes sociais",
            "Aumento da capacidade de memória humana"
        ],
        correct: 1
    },
    {
        question: "O 'capitalismo de vigilância' descreve um modelo de negócios baseado em:",
        options: [
            "Monitorar gratuitamente usuários para vender previsões de seu comportamento",
            "Proteger rigorosamente a privacidade dos consumidores",
            "Vender hardware a preços abaixo do custo",
            "Oferecer serviços governamentais digitais"
        ],
        correct: 0
    },
    {
        question: "A 'alfabetização de dados' (data literacy) tornou-se essencial porque:",
        options: [
            "Todos precisam ser programadores profissionais",
            "Cidadãos precisam entender e criticar como dados são usados na sociedade",
            "É requisito obrigatório para usar redes sociais",
            "Substitui a necessidade de conhecimentos de matemática básica"
        ],
        correct: 1
    },
    {
        question: "O 'efeito Dunning-Kruger' no contexto digital refere-se a:",
        options: [
            "Pessoas com pouco conhecimento superestimam sua competência digital",
            "Especialistas em tecnologia subestimam sua inteligência",
            "Algoritmos que aprendem mais rápido que humanos",
            "Sistemas que ficam mais inteligentes com o tempo"
        ],
        correct: 0
    },
    {
        question: "A 'exclusão digital' pode ser causada por:",
        options: [
            "Falta de acesso a dispositivos, internet ou habilidades digitais",
            "Excesso de oferta de cursos de tecnologia",
            "Popularização dos smartphones",
            "Redução do preço dos computadores"
        ],
        correct: 0
    },
    {
        question: "O 'apagamento algorítmico' ocorre quando:",
        options: [
            "Sistemas de IA ignoram ou distorcem experiências de grupos minoritários",
            "Computadores desligam automaticamente por superaquecimento",
            "Dados são apagados por erro técnico",
            "Backups automáticos falham"
        ],
        correct: 0
    },
    {
        question: "A 'fadiga da decisão' na era digital é agravada por:",
        options: [
            "Número excessivo de opções e notificações demandando atenção",
            "Falta de informações disponíveis online",
            "Poucas redes sociais para escolher",
            "Limitação de recursos nos smartphones"
        ],
        correct: 0
    },
    {
        question: "O 'valor da rede' (network effect) explica por que:",
        options: [
            "Plataformas digitais tornam-se mais valiosas quanto mais usuários têm",
            "Computadores ficam mais lentos com o tempo",
            "Redes sociais sempre protegem a privacidade dos usuários",
            "Algoritmos de recomendação nunca cometem erros"
        ],
        correct: 0
    },
    {
        question: "A 'economia da atenção' refere-se ao fato de que:",
        options: [
            "Nosso tempo e atenção tornaram-se commodities valiosas disputadas por plataformas",
            "Precisamos prestar mais atenção às aulas online",
            "Anúncios traditicionais são mais eficazes que digitais",
            "As pessoas têm capacidade ilimitada de processar informações"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da privacidade' descreve a contradição entre:",
        options: [
            "Preocupação declarada com privacidade versus comportamento real de compartilhar dados",
            "Velocidade de download versus upload na internet",
            "Custo de dispositivos versus assinaturas de serviço",
            "Qualidade de câmeras dianteiras versus traseiras em smartphones"
        ],
        correct: 0
    },
    {
        question: "A 'hiperconexão' na sociedade digital pode levar a:",
        options: [
            "Isolamento social paradoxal apesar da conectividade constante",
            "Aumento significativo de encontros presenciais",
            "Redução do uso de todas as tecnologias",
            "Eliminação completa da solidão"
        ],
        correct: 0
    },
    {
        question: "O 'determinismo tecnológico' é a ideia de que:",
        options: [
            "A tecnologia desenvolve-se independentemente da sociedade e a determina",
            "As pessoas determinam completamente o desenvolvimento tecnológico",
            "Todas as tecnologias são moralmente neutras",
            "O progresso tecnológico sempre beneficia igualmente a todos"
        ],
        correct: 0
    },
    {
        question: "A 'brecha de realização' (execution gap) em IA refere-se à diferença entre:",
        options: [
            "O que um sistema de IA pode fazer teoricamente versus na prática",
            "Velocidade de processamento de diferentes computadores",
            "Número de usuários ativos versus registrados em uma plataforma",
            "Qualidade de hardware versus software"
        ],
        correct: 0
    },
    {
        question: "O 'efeito autocomplete' em mecanismos de busca pode:",
        options: [
            "Reforçar estereótipos através de sugestões baseadas em buscas populares",
            "Melhorar sempre a precisão das pesquisas",
            "Eliminar completamente a necessidade de digitar",
            "Proteger automaticamente a privacidade dos usuários"
        ],
        correct: 0
    },
    {
        question: "A 'ética do cuidado' aplicada à tecnologia enfatiza:",
        options: [
            "Responsabilidade coletiva e impacto das tecnologias nos vulneráveis",
            "Desenvolvimento da tecnologia mais rápida possível",
            "Lucro máximo das empresas de tecnologia",
            "Competição acirrada entre desenvolvedores"
        ],
        correct: 0
    },
    {
        question: "O 'colonialismo de dados' descreve a prática de:",
        options: [
            "Países ricos extraírem dados de populações de nações em desenvolvimento",
            "Colonizar outros planetas com inteligência artificial",
            "Preservar dados históricos em arquivos digitais",
            "Compartilhar dados abertamente entre todos os países"
        ],
        correct: 0
    },
    {
        question: "A 'ressaca digital' refere-se aos efeitos de:",
        options: [
            "Uso excessivo de tecnologia no bem-estar físico e mental",
            "Beber álcool enquanto usa computador",
            "Falta de energia elétrica em data centers",
            "Vírus que danificam componentes de hardware"
        ],
        correct: 0
    },
    {
        question: "O 'princípio da precaução' em tecnologia sugere que:",
        options: [
            "Inovações potencialmente perigosas devem ser cuidadosamente avaliadas antes da implantação",
            "Todas as novas tecnologias devem ser imediatamente adotadas",
            "Só devemos usar tecnologias completamente testadas por décadas",
            "Governos devem banir qualquer tecnologia emergente"
        ],
        correct: 0
    },
    {
        question: "A 'externalidade de rede negativa' ocorre quando:",
        options: [
            "Crescimento de uma plataforma gera custos ou danos para usuários ou sociedade",
            "Uma rede social tem poucos usuários ativos",
            "Dispositivos conectados à internet ficam offline",
            "Algoritmos de recomendação funcionam perfeitamente"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de deslocamento' da tecnologia refere-se a como:",
        options: [
            "Novas tecnologias substituem não apenas empregos, mas habilidades e práticas sociais",
            "Pessoas se mudam para perto de empresas de tecnologia",
            "Dados são transferidos entre diferentes servidores",
            "Atenção dos usuários migra entre diferentes aplicativos"
        ],
        correct: 0
    },
    {
        question: "A 'transparência radical' nas organizações através da tecnologia pode levar a:",
        options: [
            "Perda de privacidade e aumento da vigilância mútua",
            "Maior segurança de dados corporativos",
            "Redução da accountability das empresas",
            "Diminuição da confiança entre colaboradores"
        ],
        correct: 0
    },
    {
        question: "O 'fenômeno do usuário fantasma' em plataformas digitais refere-se a:",
        options: [
            "Contas inativas que distorcem métricas de engajamento",
            "Hackers que invadem sistemas governamentais",
            "Algoritmos que simulam comportamento humano",
            "Pessoas que nunca usaram a internet"
        ],
        correct: 0
    },
    {
        question: "A 'discriminação de preços algorítmica' ocorre quando:",
        options: [
            "Sistemas cobram preços diferentes baseados em perfil e comportamento do usuário",
            "Produtos tecnológicos ficam mais baratos com o tempo",
            "Lojas online oferecem descontos iguais para todos os clientes",
            "Empresas fixam preços combinados entre si"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da automação' descreve como:",
        options: [
            "Sistemas automatizados tornam as falhas mais raras mas potencialmente mais catastróficas",
            "A automação sempre cria mais empregos do que elimina",
            "Robôs são mais caros que trabalhadores humanos",
            "Pessoas confiam menos em sistemas totalmente automatizados"
        ],
        correct: 0
    },
    {
        question: "A 'cultura do cancelamento' nas redes sociais demonstra o poder de:",
        options: [
            "Coletivos online em influenciar reputações e carreiras",
            "Algoritmos em controlar o comportamento humano",
            "Governos em censurar opiniões divergentes",
            "Empresas em manipular tendências digitais"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de desinibição online' refere-se à tendência de:",
        options: [
            "Pessoas se comportarem de forma mais agressiva ou íntima do que no mundo físico",
            "Usuários serem mais cautelosos online que offline",
            "Sistemas ficarem mais lentos com muitos usuários",
            "Algoritmos se tornarem mais conservadores com o tempo"
        ],
        correct: 0
    },
    {
        question: "A 'fadiga de compaixão digital' ocorre quando:",
        options: [
            "Exposição constante a sofrimento online reduz capacidade de empatia",
            "Pessoas doam muito dinheiro para causas online",
            "Sistemas de IA desenvolvem sentimentos humanos",
            "Usuários compartilham excessivamente emoções positivas"
        ],
        correct: 0
    },
    {
        question: "O 'imperativo tecnológico' é a crença de que:",
        options: [
            "O que pode ser desenvolvido tecnologicamente deve ser desenvolvido",
            "Tecnologias devem ser sempre testadas por décadas antes do uso",
            "Inovações devem seguir apenas critérios de rentabilidade",
            "Sociedades devem rejeitar mudanças tecnológicas rápidas"
        ],
        correct: 0
    },
    {
        question: "A 'democracia eletrônica' enfrenta o risco de:",
        options: [
            "Manipulação de opinião pública através de bots e desinformação",
            "Excesso de transparência nos processos governamentais",
            "Participação popular excessiva nas decisões",
            "Falta de interesse das empresas de tecnologia"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de medição' (measurement effect) em tecnologia educacional refere-se a como:",
        options: [
            "Foco em métricas quantitativas pode distorcer objetivos educacionais reais",
            "Medir a velocidade da internet melhora a aprendizagem",
            "Avaliações padronizadas sempre capturam a qualidade do ensino",
            "Dados educacionais são completamente objetivos"
        ],
        correct: 0
    },
    {
        question: "A 'cibersegurança humana' considera que:",
        options: [
            "O elemento humano é frequentemente o elo mais fraco em sistemas de segurança",
            "Computadores são mais vulneráveis que pessoas a ataques",
            "Algoritmos de segurança nunca falham",
            "Firewalls são suficientes para proteger qualquer sistema"
        ],
        correct: 0
    },
    {
        question: "O 'capital algorítmico' refere-se ao valor gerado por:",
        options: [
            "Sistemas automatizados que substituem trabalho intelectual humano",
            "Investimentos financeiros em empresas de tecnologia",
            "Mineração de criptomoedas",
            "Venda de dispositivos hardware"
        ],
        correct: 0
    },
    {
        question: "A 'ética da virtude' aplicada à tecnologia enfatiza:",
        options: [
            "Desenvolvimento de caráter moral em designers e usuários de tecnologia",
            "Cálculo de consequências de cada inovação tecnológica",
            "Seguir rigidamente todas as leis e regulamentos",
            "Maximizar lucros independentemente de considerações éticas"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de automação de viés' (automation bias) ocorre quando:",
        options: [
            "Usuários superestimam a precisão de sistemas automatizados",
            "Algoritmos se tornam automaticamente enviesados",
            "Sistemas rejeitam qualquer forma de automação",
            "Pessoas preferem sempre o trabalho manual ao automatizado"
        ],
        correct: 0
    },
    {
        question: "A 'literacia algorítmica' tornou-se importante porque:",
        options: [
            "Cidadãos precisam entender como algoritmos influenciam suas vidas",
            "Todos precisam se tornar programadores profissionais",
            "Algoritmos são simples e fáceis de entender para qualquer pessoa",
            "É requisito obrigatório para usar redes sociais"
        ],
        correct: 0
    },
    {
        question: "O 'fenômeno da cauda longa' (long tail) na economia digital permite:",
        options: [
            "Nichos de interesse encontrarem audiência economicamente viável",
            "Apenas produtos populares serem comercializados online",
            "Redução da diversidade de conteúdo disponível",
            "Concentração de renda nas grandes empresas"
        ],
        correct: 0
    },
    {
        question: "A 'cidadania de dados' (data citizenship) envolve:",
        options: [
            "Direitos e responsabilidades dos indivíduos na sociedade orientada por dados",
            "Viver exclusivamente em ambientes digitais",
            "Ter múltiplas contas em redes sociais",
            "Comprar produtos apenas online"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de rede escuro' (dark network effect) ocorre quando:",
        options: [
            "Plataformas tornam-se mais perigosas à medida que crescem",
            "A internet fica mais lenta à noite",
            "Usuários usam modos escuros em aplicativos",
            "Redes sociais fecham durante a madrugada"
        ],
        correct: 0
    },
    {
        question: "A 'ética do discurso' aplicada às redes sociais enfatiza:",
        options: [
            "Diálogo racional e condições ideais de comunicação online",
            "Liberdade absoluta de expressão sem responsabilidade",
            "Censura prévia de todas as opiniões divergentes",
            "Eliminação completa do anonimato online"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da escolha' na era digital sugere que:",
        options: [
            "Muitas opções podem levar à ansiedade e insatisfação",
            "Poucas opções sempre resultam em melhores decisões",
            "Algoritmos eliminam completamente a necessidade de escolher",
            "As pessoas preferem quando outros decidem por elas"
        ],
        correct: 0
    },
    {
        question: "A 'economia do compartilhamento' frequentemente resulta em:",
        options: [
            "Precarização laboral sob a aparência de inovação",
            "Distribuição igualitária de riqueza entre todos os participantes",
            "Redução do consumo de recursos naturais",
            "Eliminação completa da propriedade privada"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de desmoralização tecnológica' refere-se a como:",
        options: [
            "Habilidades humanas tradicionais perdem valor em sociedades high-tech",
            "Pessoas ficam mais moralistas online",
            "Sistemas de IA desenvolvem consciência moral",
            "Tecnologias tornam as pessoas mais éticas"
        ],
        correct: 0
    },
    {
        question: "A 'governança polcéntrica' na internet refere-se a:",
        options: [
            "Múltiplos atores (estados, empresas, sociedade civil) influenciando a governança da rede",
            "Controle exclusivo por um único país",
            "Ausência total de regulação na internet",
            "Domínio completo por corporações tecnológicas"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de deslocamento de habilidades' (skill displacement) ocorre quando:",
        options: [
            "Novas tecnologias tornam certas habilidades obsoletas mais rápido do que novas são desenvolvidas",
            "Pessoas aprendem habilidades muito rapidamente",
            "Sistemas educacionais preparam perfeitamente para o futuro",
            "Empresas oferecem treinamento adequado para todos os funcionários"
        ],
        correct: 0
    },
    {
        question: "A 'ética do cuidado extendida' à IA considera que:",
        options: [
            "Devemos considerar impactos em futuras gerações e no planeta",
            "Apenas os benefícios presentes importam",
            "Custos de desenvolvimento justificam qualquer consequência",
            "Tecnologias devem ser desenvolvidas sem nenhuma consideração ética"
        ],
        correct: 0
    },
    {
        question: "O 'fenômeno da inovação disruptiva' descreve como:",
        options: [
            "Tecnologias simples e acessíveis podem transformar mercados estabelecidos",
            "Grandes empresas sempre lideram a inovação tecnológica",
            "Governos controlam completamente o ritmo da inovação",
            "Todas as inovações seguem padrões previsíveis"
        ],
        correct: 0
    },
    {
        question: "A 'responsabilidade distribuída' em sistemas complexos de IA significa que:",
        options: [
            "Múltiplos atores compartilham responsabilidade por resultados",
            "Ninguém é responsável por falhas de sistemas automatizados",
            "Apenas os usuários finais são responsáveis",
            "Desenvolvedores têm responsabilidade ilimitada"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de path dependence' (dependência do caminho) em tecnologia explica como:",
        options: [
            "Decisões tecnológicas passadas limitam opções futuras",
            "Todas as tecnologias evoluem independentemente de seu histórico",
            "Inovações rompem completamente com o passado",
            "O acaso determina completamente o desenvolvimento tecnológico"
        ],
        correct: 0
    },
    {
        question: "A 'ética da responsabilidade' de Hans Jonas aplicada à tecnologia enfatiza:",
        options: [
            "Responsabilidade pelas consequências de longo prazo de nossas ações tecnológicas",
            "Maximização de benefícios imediatos independentemente do futuro",
            "Que apenas as gerações presentes importam moralmente",
            "Que o mercado regulará automaticamente os impactos tecnológicos"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de transbordamento' (spillover effect) da inovação tecnológica refere-se a como:",
        options: [
            "Avancos em uma área frequentemente beneficiam outros campos não relacionados",
            "Tecnologias permanecem confinadas aos seus setores originais",
            "Inovações tecnológicas sempre geram lucros imediatos",
            "Governos controlam a disseminação de novas tecnologias"
        ],
        correct: 0
    },
    {
        question: "A 'ficção de controle' na interface homem-máquina refere-se à:",
        options: [
            "Ilusão de que usuários têm mais controle sobre sistemas do que realmente têm",
            "Capacidade total dos usuários em controlar sistemas complexos",
            "Controle absoluto das máquinas sobre os humanos",
            "Falta completa de controle em qualquer sistema digital"
        ],
        correct: 0
    },
    {
        question: "O 'princípio da proporcionalidade' na regulamentação tecnológica sugere que:",
        options: [
            "Restrições devem ser adequadas aos riscos reais identificados",
            "Todas as tecnologias devem ser igualmente regulamentadas",
            "Não deve haver nenhuma regulamentação tecnológica",
            "Regulamentações devem sempre favorecer as grandes empresas"
        ],
        correct: 0
    },
    {
        question: "A 'ética do discurso tecnológico' enfatiza a importância de:",
        options: [
            "Incluir diversas vozes no debate sobre desenvolvimento tecnológico",
            "Deixar apenas especialistas discutirem questões tecnológicas",
            "Evitar completamente debates públicos sobre tecnologia",
            "Decidir questões tecnológicas através de votação online"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de lock-in' (bloqueio) tecnológico ocorre quando:",
        options: [
            "Usuários ficam presos a um ecossistema tecnológico específico",
            "Sistemas se tornam completamente flexíveis e adaptáveis",
            "Pessoas mudam frequentemente entre diferentes tecnologias",
            "Novas tecnologias são sempre compatíveis com as antigas"
        ],
        correct: 0
    },
    {
        question: "A 'democratização da tecnologia' refere-se ao processo de:",
        options: [
            "Tornar tecnologias acessíveis e utilizáveis por não especialistas",
            "Restringir o uso de tecnologias apenas a especialistas",
            "Votar sobre quais tecnologias devem ser desenvolvidas",
            "Substituir governos por sistemas tecnocráticos"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da produtividade' na era digital descreve como:",
        options: [
            "Gains de produtividade nem sempre se traduzem em melhor qualidade de vida",
            "Tecnologias sempre aumentam a produtividade igualmente para todos",
            "Pessoas se tornam automaticamente mais produtivas com novas tecnologias",
            "Produtividade não tem relação com desenvolvimento tecnológico"
        ],
        correct: 0
    },
    {
        question: "A 'ética da reconstrução' tecnológica propõe que:",
        options: [
            "Devemos redesenhar sistemas tecnológicos para valores mais humanos",
            "Tecnologias devem ser aceitas exatamente como são desenvolvidas",
            "Todas as tecnologias existentes devem ser abandonadas",
            "Valores éticos impedem o progresso tecnológico"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de segunda ordem' em inovações tecnológicas refere-se a:",
        options: [
            "Consequências indiretas e imprevistas que emergem com o tempo",
            "Impactos imediatos e óbvios de novas tecnologias",
            "Efeitos medidos em laboratórios antes do lançamento",
            "Benefícios econômicos diretos de inovações"
        ],
        correct: 0
    },
    {
        question: "A 'literacia de interface' tornou-se importante porque:",
        options: [
            "Interfaces moldam como percebemos e interagimos com o mundo digital",
            "Todas as interfaces são intuitivas e não requerem aprendizado",
            "Interfaces são irrelevantes para a experiência do usuário",
            "Apenas designers precisam entender sobre interfaces"
        ],
        correct: 0
    },
    {
        question: "O 'fenômeno da cascata de informação' (information cascade) online ocorre quando:",
        options: [
            "Pessoas adotam crenças baseadas no comportamento observado de outros, não em evidências",
            "Informações fluem livremente sem influência social",
            "Cada pessoa decide independentemente baseada apenas em fatos",
            "Algoritmos eliminam completamente a influência social"
        ],
        correct: 0
    },
    {
        question: "A 'ética da virtude extendida' à IA considera que:",
        options: [
            "Desenvolvedores devem cultivar virtudes como humildade epistêmica e responsabilidade",
            "Apenas resultados técnicos importam no desenvolvimento de IA",
            "Considerações éticas atrasam desnecessariamente o progresso",
            "Virtudes humanas são irrelevantes para sistemas técnicos"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de desalojamento' (crowding out) tecnológico refere-se a como:",
        options: [
            "Tecnologias comerciais podem suprimir alternativas não-comerciais",
            "Novas tecnologias sempre coexistem pacificamente com as antigas",
            "Múltiplas tecnologias complementam-se perfeitamente",
            "Governos garantem diversidade tecnológica automaticamente"
        ],
        correct: 0
    },
    {
        question: "A 'justiça algorítmica' busca garantir que:",
        options: [
            "Sistemas automatizados não perpetuem ou amplifiquem injustiças sociais",
            "Algoritmos sejam completamente imparciais por natureza técnica",
            "Apenas especialistas entendam como algoritmos funcionam",
            "Todos os algoritmos sejam igualmente aplicados em todas as situações"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da transparência' em sistemas complexos sugere que:",
        options: [
            "Transparência total pode tornar sistemas menos compreensíveis",
            "Mais transparência sempre leva a melhor compreensão",
            "Sistemas fechados são automaticamente mais compreensíveis",
            "Transparência é irrelevante para a usabilidade"
        ],
        correct: 0
    },
    {
        question: "A 'ética do design value-sensitive' propõe que:",
        options: [
            "Valores humanos devem ser incorporados no projeto de sistemas tecnológicos",
            "Tecnologias são moralmente neutras independentemente do design",
            "Apenas considerações estéticas importam no design",
            "Valores éticos impedem designs funcionais"
        ],
        correct: 0
    },
    {
        question: "O 'efeito de externalização' (externalization effect) cognitiva ocorre quando:",
        options: [
            "Confiamos em dispositivos para armazenar conhecimentos que antes mantínhamos na mente",
            "Nosso cérebro se torna mais capaz com o uso de tecnologia",
            "Tecnologias não afetam nossos processos cognitivos",
            "Memória humana se torna mais forte com dispositivos digitais"
        ],
        correct: 0
    },
    {
        question: "A 'cidadania algorítmica' emergente refere-se a:",
        options: [
            "Novas formas de participação e direitos em sociedades governadas por algoritmos",
            "Substituição completa da cidadania tradicional por sistemas automatizados",
            "Direitos de voto exclusivamente através de plataformas digitais",
            "Eliminação da necessidade de participação cívica humana"
        ],
        correct: 0
    },
    {
        question: "O 'paradoxo da inovação' descreve como:",
        options: [
            "Soluções tecnológicas frequentemente criam novos problemas enquanto resolvem os antigos",
            "Inovações sempre resolvem completamente os problemas que enfrentam",
            "Progresso tecnológico é linear e sem contradições",
            "Novos problemas surgem independentemente das inovações"
        ],
        correct: 0
    },
    {
        question: "A 'ética da precaução extendida' aplicada à IA considera que:",
        options: [
            "Devemos considerar até cenários de risco extremo, mesmo com baixa probabilidade",
            "Apenas riscos imediatos e prováveis merecem consideração",
            "Incerteza justifica avançar sem qualquer cautela",
            "Todas as inovações devem ser banidas até prova completa de segurança"
        ],
        correct: 0
    },

    {
        question: "Deepfakes representam ameaça particular à:",
        options: [
            "Velocidade da internet",
            "Integridade da informação e confiança social",
            "Capacidade de armazenamento em nuvem",
            "Desempenho de processadores gráficos"
        ],
        correct: 1
    },
    {
        question: "O conceito 'Explainable AI' (IA Explicável) busca:",
        options: [
            "Acelerar processamento de algoritmos complexos",
            "Tornar decisões de IA compreensíveis para humanos",
            "Reduzir custos computacionais",
            "Aumentar a coleta de dados pessoais"
        ],
        correct: 1
    },

    
    {
        question: "Na economia de plataformas, o trabalho de 'microtask' via IA frequentemente apresenta problema de:",
        options: [
            "Excesso de benefícios trabalhistas",
            "Precarização e baixa remuneração",
            "Alta qualificação exigida",
            "Excesso de regulamentação estatal"
        ],
        correct: 1
    }
    // ... (as demais questões continuariam seguindo esse padrão de complexidade)
];

// Total de 100 questões de múltipla escolha
console.log("Banco de 100 questões de Cidadania Digital e IAs carregado!");