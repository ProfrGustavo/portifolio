// Banco de questões - 50 questões sobre Cidadania Digital
const questionBank = [
    {
        question: "1. Você recebe uma mensagem no WhatsApp com um áudio alarmante sobre um novo surto de uma doença. A mensagem pede para você repassar para o máximo de pessoas. Qual a atitude mais correta?",
        options: [
            "a) Repassar imediatamente para todos os seus grupos para alertá-los.",
            "b) Salvar o áudio para ouvir depois com calma.",
            "c) Procurar a informação em sites oficiais de saúde antes de qualquer coisa.",
            "d) Ignorar completamente, pois tudo na internet é mentira."
        ],
        correct: 2  // C
    },
    {
        question: "2. Ao pesquisar para um trabalho escolar, você encontra um site com informações perfeitas, mas não identifica o autor ou a data da publicação. O que você faz?",
        options: [
            "a) Copia as informações, pois estão de acordo com o que você precisa.",
            "b) Busca a mesma informação em outras fontes confiáveis para confirmar.",
            "c) Assume que, como está na internet, é verdade.",
            "d) Desiste de usar a informação, mesmo que seja útil."
        ],
        correct: 1  // B
    },
    {
        question: "3. Um amigo postou uma foto em uma festa que você acha constrangedora para ele. Você deve:",
        options: [
            "a) Comentar na foto com um emoji de risada para zoar ele.",
            "b) Enviar uma mensagem privada e sugerir que ele apague a foto.",
            "c) Compartilhar a foto no seu perfil para que mais amigos vejam.",
            "d) Ignorar, pois o perfil é dele e ele pode postar o que quiser."
        ],
        correct: 1  // B
    },
    {
        question: "4. Você está em uma discussão acalorada nos comentários de uma notícia. Um desconhecido começa a te ofender. Qual a melhor reação?",
        options: [
            "a) Revidar na mesma moeda, defendendo seu ponto de vista com ofensas.",
            "b) Printar a tela e postar no seu perfil, expondo a pessoa.",
            "c) Bloquear a pessoa e não alimentar a briga.",
            "d) Denunciar a pessoa para a polícia imediatamente."
        ],
        correct: 2  // C
    },
    {
        question: "5. Encontrou um meme muito engraçado que usa a foto de um colega de classe sem a permissão dele. O que você NÃO deve fazer?",
        options: [
            "a) Rir do meme, mas não compartilhar.",
            "b) Compartilhar o meme nos seus stories marcando o colega.",
            "c) Salvar o meme apenas para você.",
            "d) Perguntar ao colega se ele se importa com a foto."
        ],
        correct: 1  // B
    },
    {
        question: "6. Você comprou um produto online que não atendeu às suas expectativas. A loja se recusa a trocar. A atitude mais produtiva é:",
        options: [
            "a) Fazer um post nas redes sociais chamando a loja de golpista.",
            "b) Registrar uma reclamação no site do Procon ou órgão de defesa do consumidor.",
            "c) Fazer várias reclamações falsas no perfil da loja.",
            "d) Desistir e nunca mais comprar online."
        ],
        correct: 1  // B
    },
    {
        question: "7. Um perfil anônimo nas redes sociais começa a enviar mensagens desconfortáveis para você. O que fazer?",
        options: [
            "a) Responder para perguntar quem é a pessoa.",
            "b) Não responder, bloquear o perfil e reportar a assédio para a rede social.",
            "c) Criar um perfil falso para investigar quem é.",
            "d) Compartilhar as prints com todos os seus amigos para acharem a pessoa."
        ],
        correct: 1  // B
    },
    {
        question: "8. Você vê uma notícia política que confirma exatamente sua opinião. Antes de compartilhar, você:",
        options: [
            "a) Confere se veio de um grupo de WhatsApp confiável.",
            "b) Lê a notícia completa e verifica se o site é conhecido e sério.",
            "c) Compartilha imediatamente, pois é importante que todos saibam.",
            "d) Só compartilha se tiver muitos 'curtir'."
        ],
        correct: 1  // B
    },
    {
        question: "9. Um familiar mais velho pergunta como saber se uma oferta online é confiável. Você ensina a:",
        options: [
            "a) Confiar apenas em anúncios que aparecem em jogos.",
            "b) Verificar se o site tem 'https://' e um cadeado na barra de endereços, e ler avaliações.",
            "c) Comprar apenas se o preço for muito barato.",
            "d) Pedir o CPF e senha para finalizar a compra, pois é normal."
        ],
        correct: 1  // B
    },
    {
        question: "10. Você esqueceu sua conta de rede social logada no computador da escola. A primeira coisa a fazer é:",
        options: [
            "a) Pedir para um amigo lá deslogar para você.",
            "b) Trocar sua senha imediatamente de outro dispositivo.",
            "c) Não se preocupar, seus amigos não mexeriam.",
            "d) Criar uma nova conta."
        ],
        correct: 1  // B
    },
    {
        question: "11. Um amigo te envia um link suspeito com a mensagem 'Você viu isso sobre você?'. Você:",
        options: [
            "a) Clica no link com curiosidade para ver o que é.",
            "b) Pergunta para o amigo, por mensagem, o que é o link antes de clicar.",
            "c) Encaminha o link para outros amigos para ver se eles clicam primeiro.",
            "d) Assume que é vírus e bloqueia o amigo."
        ],
        correct: 1  // B
    },
    {
        question: "12. Na hora de criar uma nova senha para e-mail, a opção mais segura é:",
        options: [
            "a) Usar seu nome e data de nascimento.",
            "b) Usar '123456' porque é fácil de lembrar.",
            "c) Usar uma combinação de letras maiúsculas, minúsculas, números e símbolos.",
            "d) Usar a mesma senha que você usa em todas as outras contas."
        ],
        correct: 2  // C
    },
    {
        question: "13. Você está em uma videochamada com amigos e um deles começa a gravar a tela sem avisar ninguém. Isso é:",
        options: [
            "a) Um gesto esperto para guardar a lembrança.",
            "b) Uma violação da privacidade dos participantes.",
            "c) Algo que todo mundo faz, então é normal.",
            "d) Proibido apenas se a conversa for de trabalho."
        ],
        correct: 1  // B
    },
    {
        question: "14. Você recebe um e-mail dizendo que sua conta bancária será bloqueada e pedindo para você clicar em um link e confirmar seus dados. O que faz?",
        options: [
            "a) Clica no link e preenche os dados para não ter problemas.",
            "b) Ignora o e-mail e, se estiver preocupado, liga para o banco por um número oficial.",
            "c) Encaminha o e-mail para seus familiares para alertá-los.",
            "d) Responde ao e-mail perguntando se é verdade."
        ],
        correct: 1  // B
    },
    {
        question: "15. Você quer baixar um aplicativo de edição de fotos. Encontra uma versão 'gratuita e modificada' em um site não oficial. O risco é:",
        options: [
            "a) Zero, tudo que é gratuito é seguro.",
            "b) O aplicativo pode conter vírus ou roubar seus dados.",
            "c) O aplicativo pode não funcionar tão bem quanto o original.",
            "d) Você vai receber mais anúncios."
        ],
        correct: 1  // B
    },
    {
        question: "16. Você vê um post com uma história triste pedindo doações em dinheiro via PIX para uma pessoa desconhecida. Sua atitude deve ser:",
        options: [
            "a) Doar imediatamente, pois a situação parece urgente.",
            "b) Pesquisar sobre a campanha para verificar se é legítima antes de doar.",
            "c) Compartilhar para aumentar o alcance, mesmo sem saber se é verdade.",
            "d) Ignorar, pois você não tem obrigação de ajudar."
        ],
        correct: 1  // B
    },
    {
        question: "17. Um youtuber que você acompanha faz um discurso de ódio contra um grupo de pessoas. Como fã, você deve:",
        options: [
            "a) Apoiar o discurso, pois você confia nele.",
            "b) Parar de seguir o canal e denunciar o vídeo.",
            "c) Fazer um vídeo respondendo com mais ódio.",
            "d) Não fazer nada, pois é a opinião dele."
        ],
        correct: 1  // B
    },
    {
        question: "18. Ao fazer um cadastro em um site novo, ele pede permissão para acessar sua localização, contatos e galeria de fotos. Você:",
        options: [
            "a) Aceita tudo, senão o app não funciona.",
            "b) Pensa para que o app precisa dessas permissões e nega as que não fazem sentido.",
            "c) Só aceita se for um app de jogos.",
            "d) Nunca aceita nenhuma permissão."
        ],
        correct: 1  // B
    },
    {
        question: "19. Você posta uma foto na praia e um desconhecido nos comentários faz uma observação desrespeitosa sobre seu corpo. O que fazer?",
        options: [
            "a) Responder com outra ofensa.",
            "b) Deletar o comentário e bloquear a pessoa.",
            "c) Tirar a foto do ar imediatamente.",
            "d) Pedir para seus amigos inundarem o comentário da pessoa com ofensas."
        ],
        correct: 1  // B
    },
    {
        question: "20. Sua avó compartilha constantemente notícias falsas sobre remédios caseiros no grupo da família. O que você pode fazer de forma respeitosa?",
        options: [
            "a) Rir dela no grupo e dizer que isso é bobagem.",
            "b) Enviar, no privado, links de sites confiáveis que desmentem aquela informação.",
            "c) Remover ela do grupo para não 'poluir' o espaço.",
            "d) Pedir para seus pais darem um sermão nela."
        ],
        correct: 1  // B
    },
    {
        question: "21. Você está em um fórum de discussão e tem uma opinião diferente da maioria. Para expressá-la, você:",
        options: [
            "a) Cria um perfil falso para não ser atacado.",
            "b) Expõe seu ponto de vista com educação e respeito, usando argumentos.",
            "c) Fica quieto para evitar conflitos.",
            "d) Concorda com a maioria, mesmo não achando certo."
        ],
        correct: 1  // B
    },
    {
        question: "22. Um colega de trabalho posta uma foto no escritório e, ao fundo, é possível ver a tela do computador com dados confidenciais da empresa. O que você faz?",
        options: [
            "a) Comenta publicamente na foto: 'Olha o dado confidencial aí atrás!'.",
            "b) Manda uma mensagem privada para ele, alertando sobre o problema.",
            "c) Mostra para seu chefe para que o colega seja repreendido.",
            "d) Não faz nada, problema dele."
        ],
        correct: 1  // B
    },
    {
        question: "23. Você recebe um SMS dizendo que ganhou um prêmio e deve clicar para resgatar. Você nunca participou de nenhuma promoção. O que faz?",
        options: [
            "a) Clica para ver qual é o prêmio.",
            "b) Apaga a mensagem, pois é uma tentativa clássica de golpe.",
            "c) Encaminha a mensagem para seus amigos.",
            "d) Liga para o número que veio no SMS para confirmar."
        ],
        correct: 1  // B
    },
    {
        question: "24. Ao usar um filtro de beleza em um app, você percebe que ele deixa seu rosto irreconhecível, 'perfeito'. O maior risco disso é:",
        options: [
            "a) Gastar muita bateria do celular.",
            "b) Criar uma expectativa irreal sobre a sua própria aparência e a dos outros.",
            "c) O app ficar lento.",
            "d) Seus seguidores não gostarem do filtro."
        ],
        correct: 1  // B
    },
    {
        question: "25. Você está em um jogo online e um jogador começa a ser tóxico, xingando todo mundo. A melhor atitude é:",
        options: [
            "a) Xingar de volta para ele aprender.",
            "b) Usar a ferramenta do jogo para mutar e reportar o jogador.",
            "c) Sair do jogo e desinstalar.",
            "d) Gravar a tela e postar no TikTok para viralizar."
        ],
        correct: 1  // B
    },
    {
        question: "26. Você precisa de uma imagem para uma apresentação. Encontra a foto perfeita no Google Imagens. Para usá-la de forma ética, você:",
        options: [
            "a) Copia e cola, não precisa dar os créditos.",
            "b) Verifica a fonte original e pede permissão ao autor, ou busca por imagens de domínio público.",
            "c) Baixa a imagem em baixa resolução para ninguém perceber.",
            "d) Usa a imagem, mas coloca um filtro por cima."
        ],
        correct: 1  // B
    },
    {
        question: "27. Um amigo te conta um segredo muito pessoal e pede para não contar para ninguém. No dia seguinte, outro amigo pergunta se é verdade um boato sobre esse segredo. Você:",
        options: [
            "a) Confirma o boato para parecer que está por dentro.",
            "b) Mantém o segredo e diz que não tem informações sobre o assunto.",
            "c) Cria um story indireto sobre trair confianças.",
            "d) Pergunta onde ele ouviu o boato e sai procurando a fonte."
        ],
        correct: 1  // B
    },
    {
        question: "28. Você está fazendo um teste online de 'qual personagem você é' que pede acesso ao seu perfil, amigos e fotos. É seguro?",
        options: [
            "a) Sim, todos os testes fazem isso.",
            "b) Não, esse tipo de app pode coletar muitos dados pessoais seus.",
            "c) Só é perigoso se for preto e branco.",
            "d) É seguro apenas se você fizer o login com o Facebook."
        ],
        correct: 1  // B
    },
    {
        question: "29. Você posta um tweet criticando uma empresa pelo mau atendimento. Eles respondem pedindo seus dados para resolver a situação. Você:",
        options: [
            "a) Passa todos os dados publicamente no tweet.",
            "b) Envia uma mensagem direta (DM) para a empresa com os dados necessários.",
            "c) Ignora, pois já desabafou e isso é o que importa.",
            "d) Deleta o tweet, com medo de processarem você."
        ],
        correct: 1  // B
    },
    {
        question: "30. Um influencer promove um 'investimento secreto' que garante retornos altíssimos. Seus seguidores estão todos comentando que entraram. Você:",
        options: [
            "a) Investe todo seu dinheiro, confiando na reputação do influencer.",
            "b) Desconfia, pois investimentos de verdade não são promovidos como segredos e têm riscos.",
            "c) Pede dinheiro emprestado para investir também.",
            "d) Comenta perguntando se é pirâmide."
        ],
        correct: 1  // B
    },
    {
        question: "31. Você encontra um perfil que só posta memes humilhando um colega seu. A atitude correta é:",
        options: [
            "a) Seguir o perfil para ficar rindo dos memes.",
            "b) Reportar o perfil por bullying e cyberbullying.",
            "c) Mostrar os memes para o colega afetado.",
            "d) Criar um perfil concorrente com memes melhores."
        ],
        correct: 1  // B
    },
    {
        question: "32. Ao pesquisar no Google, os primeiros resultados são sempre anúncios. Isso significa que:",
        options: [
            "a) Esses são os sites mais confiáveis sobre o assunto.",
            "b) Esses sites pagaram para aparecerem primeiro, não necessariamente são os melhores.",
            "c) O Google gosta mais desses sites.",
            "d) Esses sites são os mais novos."
        ],
        correct: 1  // B
    },
    {
        question: "33. Você está em um call com amigos e um deles começa a falar mal de outra pessoa que não está presente. Você:",
        options: [
            "a) Participa da fofoca, dando mais detalhes.",
            "b) Muda de assunto de forma discreta.",
            "c) Grava a conversa para mostrar para a pessoa depois.",
            "d) Fica quieto, mas depois conta tudo para a pessoa."
        ],
        correct: 1  // B
    },
    {
        question: "34. Você comprou um jogo digital, terminou em uma semana e quer seu dinheiro de volta. A loja online não tem política de reembolso. Você:",
        options: [
            "a) Cria várias contas falsas para dar notas baixas ao jogo.",
            "b) Aceita que fez um mau negócio e fica mais atento na próxima compra.",
            "c) Liga para a polícia para relatar o golpe.",
            "d) Espalha que o jogo é uma fraude, mesmo não sendo."
        ],
        correct: 1  // B
    },
    {
        question: "35. Um site de notícias conhecido publica uma manchete que parece sensacionalista. Para saber a verdade, você:",
        options: [
            "a) Só lê a manchete e já compartilha.",
            "b) Lê a matéria completa para entender o contexto.",
            "c) Confia, pois o site é conhecido.",
            "d) Acredita nos comentários que confirmam sua opinião."
        ],
        correct: 1  // B
    },
    {
        question: "36. Você recebe uma solicitação de amizade de um desconhecido que tem 20 amigos em comum com você. O que faz?",
        options: [
            "a) Aceita imediatamente, pois se tem amigos em comum deve ser seguro.",
            "b) Pergunta para um desses amigos em comum quem é a pessoa.",
            "c) Ignora todas as solicitações de desconhecidos.",
            "d) Aceita e depois fuça todas as fotos da pessoa."
        ],
        correct: 1  // B
    },
    {
        question: "37. Sua conta em uma rede social foi invadida e a pessoa está postando coisas ofensivas no seu perfil. A primeira medida é:",
        options: [
            "a) Pedir desculpas publicamente pelos posts.",
            "b) Tentar recuperar o acesso trocando a senha ou usando a opção 'esqueci minha senha'.",
            "c) Criar uma nova conta e abandonar a antiga.",
            "d) Fingir que não é com você."
        ],
        correct: 1  // B
    },
    {
        question: "38. Um app de previsão do tempo pede acesso ao seu microfone. Isso é:",
        options: [
            "a) Normal, para ouvir se está ventando lá fora.",
            "b) Estranho, pois um app de tempo não precisa do seu microfone para funcionar.",
            "c) Necessário para que o app funcione corretamente.",
            "d) Útil para você ditar o endereço onde quer a previsão."
        ],
        correct: 1  // B
    },
    {
        question: "39. Você vê um vídeo incrível de um acidente, mas a pessoa parece estar gravemente ferida. Compartilhar esse vídeo é:",
        options: [
            "a) Ok, pois serve de alerta para os outros.",
            "b) Desrespeitoso com a vítima e sua família, podendo causar mais sofrimento.",
            "c) Um dever, pois a verdade deve ser mostrada.",
            "d) Algo que só deve ser feito se o vídeo já for viral."
        ],
        correct: 1  // B
    },
    {
        question: "40. Você está em um grupo de pais da escola e alguém compartilha um áudio com um boato sobre um professor. A atitude do cidadão digital é:",
        options: [
            "a) Repassar o áudio para outros grupos de pais.",
            "b) Questionar a veracidade do áudio e pedir a fonte da informação.",
            "c) Ligar para o professor para confrontá-lo.",
            "d) Salvar o áudio, mas não compartilhar."
        ],
        correct: 1  // B
    },
    {
        question: "41. Para proteger sua privacidade, ao usar um Wi-Fi público gratuito, você deve evitar:",
        options: [
            "a) Navegar em sites de notícias.",
            "b) Fazer login em contas bancárias ou digitar senhas importantes.",
            "c) Usar as redes sociais.",
            "d) Fazer qualquer tipo de pesquisa."
        ],
        correct: 1  // B
    },
    {
        question: "42. Um político que você apoia compartilha uma informação que você sabe que é falsa. Isso significa que:",
        options: [
            "a) A informação agora se torna verdadeira.",
            "b) Mesmo pessoas que admiramos podem espalhar desinformação, intencionalmente ou não.",
            "c) Você deve compartilhar também, para apoiá-lo.",
            "d) A imprensa está inventando coisas sobre ele."
        ],
        correct: 1  // B
    },
    {
        question: "43. Você está em uma live e o youtuber pede para todo mundo mandar '1' no chat para apoiar uma causa. Fazer isso:",
        options: [
            "a) É inofensivo e mostra que você está engajado.",
            "b) Pode ser uma forma de o criador coletar engagement e dados da audiência.",
            "c) Vai deixar seu perfil marcado para sempre.",
            "d) É a mesma coisa que fazer uma doação."
        ],
        correct: 1  // B
    },
    {
        question: "44. Você tira uma selfie com amigos e uma delas saiu com os olhos fechados. Para postar, você:",
        options: [
            "a) Posta a foto mesmo assim e marca todo mundo.",
            "b) Pede permissão para todos antes de postar qualquer foto.",
            "c) Edita o rosto da amiga para abrir os olhos sem ela saber.",
            "d) Posta só no 'fechado', assim ninguém vê."
        ],
        correct: 1  // B
    },
    {
        question: "45. Um site de notícias tem muitos anúncios pop-up e título em caixa alta. Isso é um sinal de:",
        options: [
            "a) Um site muito profissional e sério.",
            "b) Um site potencialmente sensacionalista ou de baixa qualidade.",
            "c) Que o site foi hackeado.",
            "d) Que seu computador está com vírus."
        ],
        correct: 1  // B
    },
    {
        question: "46. Você vê um post patrocinado sobre um produto de emagrecimento milagroso, com depoimentos de pessoas anônimas. Você:",
        options: [
            "a) Compra o produto imediatamente.",
            "b) Desconfia, pois produtos milagrosos geralmente são golpes ou prejudiciais à saúde.",
            "c) Salva o post para ver depois.",
            "d) Compartilha com uma amiga que quer emagrecer."
        ],
        correct: 1  // B
    },
    {
        question: "47. Um colega posta que está se mudando para uma nova cidade e marca a localização da casa nova. Nos comentários, você:",
        options: [
            "a) Parabeniza e pergunta o valor do aluguel.",
            "b) Dá os parabéns em uma mensagem privada, evitando expor publicamente a localização dele.",
            "c) Comenta 'Que casa linda! Já sei onde você mora agora!'.",
            "d) Salva a localização para um dia visitá-lo de surpresa."
        ],
        correct: 1  // B
    },
    {
        question: "48. Ao encontrar um conteúdo na internet (texto, imagem, vídeo) que não tem o autor claramente identificado, você deve assumir que:",
        options: [
            "a) É de domínio público e pode usar como quiser.",
            "b) Alguém é o dono daquele conteúdo e você deve creditar o autor se for usá-lo.",
            "c) Foi o Google que criou.",
            "d) Pode usar, desde que não seja para ganhar dinheiro."
        ],
        correct: 1  // B
    },
    {
        question: "49. Um amigo te manda um print de uma conversa privada dele com outra pessoa. Isso é:",
        options: [
            "a) Um gesto de confiança e amizade.",
            "b) Uma quebra de confidencialidade, a menos que a outra pessoa tenha autorizado.",
            "c) Almoço grátis para uma fofoca.",
            "d) Normal, todo mundo faz."
        ],
        correct: 1  // B
    },
    {
        question: "50. O conceito de 'pegada digital' se refere a:",
        options: [
            "a) O rastro de sujeira que o celular deixa na mesa.",
            "b) Tudo o que você faz, posta e deixa registrado na internet, que pode ser visto por outros e permanecer para sempre.",
            "c) A bateria do seu celular que acaba rápido.",
            "d) O seu número de seguidores nas redes sociais."
        ],
        correct: 1  // B
    }
];