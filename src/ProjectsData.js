const ProjectsData = [
    {   
        name:"Resumo Rápido",
        gitName:"Resumo-Rapido",
        fileName:"ResumoRapido.webp",
        desc: ["Resumos de videos no Youtube usando Inteligencia Artificial. Através do Gemine em conjunto com o pacote 'youtube-transcript' responsavél por extrair a transcrição do video"],
        skills: ["ReactJS", "NodeJS", "Inteligência Artificial", "Gemine"],
        page: false  //Indica se o projeto está ou não no ar, pronto para ser acessado por link
    },

    {   
        name:"E-commerce",
        gitName:"Lojinha",
        fileName:"Lojinha.webp",
        desc: ["E-commerce com funcionalidades como carrinho, login, cadastro, painel do administrador, criação de produto dentre outras"],
        skills: ["ReactJS", "NodeJS", "Mercado Pago", "AWS S3"],
        page: false
    },

    {   
        name:"Marketplace",
        gitName:"payment-links-store",
        fileName:"LojaItensNoGeral.webp",
        desc: ["A aplicação consiste em uma loja, o usuário pode navegar entre os produtos e comprar o item desejado. Qualquer usúario cadastrato pode públicar produtos que então devem ser aprovados por algum administrador"],
        skills: ["ReactJS", "NodeJS", "Stripe"],
        page: false
    },

    {   
        name:"Pokemon TCG",
        gitName:"Pokemon",
        fileName:"PokemonTCG.webp",
        desc: ["Buscador de cartas de Pokemon TCG (Jogo de cartas de pokémon). Consome uma api com mais de 18 mil cartas", "É possivél buscar por nome, raridade e tipo, alterar entre os temas claro e escuro e comparar atributos de cartas"],
        skills: ["ReactJS", "TSX", "TypeScript", "Api"],
        page: "https://pokemon-cyan-zeta.vercel.app/"
    },

    {   
        name:"Chat",
        gitName:"Chat",
        fileName:"Chat.webp",
        desc: ["O projeto consiste em um chat em tempo real, onde você escolhe o nome de usuário e envia uma mensagem."],
        skills: ["NextJS", "NodeJS", "TailwindCSS", "Socket.io"],
        page: false
    },

    {   
        name:"Portfolio Designer",
        gitName:"EMABGU",
        fileName:"PortifolioDesigner.webp",
        desc: ["Trabalho freelancer realizado para um designer, apresentando diversas imagens de seus projetos. O site possui um design personalizado, com cores que harmonizam com a logomarca, e é totalmente responsivo."],
        skills: ["ReactJS", "JSX"],
        githubPages: true,
        page : "https://tiagoviniciusdev.github.io/EMABGU/"
    },

    {
        name:"Loja de Celulares",
        gitName:"Loja-De-Celulares",
        fileName:"LojaCelulares.webp",
        desc: ["Desenvolvi esse projeto utilizando React.js, que traz à vida uma envolvente loja de celulares. Esta aplicação dinâmica e interativa extrai informações diretamente da API do Mercado Livre, proporcionando aos usuários uma experiência de compra imersiva e conveniente."],
        skills: ["ReactJS", "JSX", "Consumo de API"],
        githubPages: true,
        page : "https://tiagoviniciusdev.github.io/Loja-De-Celulares/"
    },

    {
        name:"Dream Music",
        gitName:"Dream-Music",
        fileName:"DreamMusic.webp",
        desc:["Aplicação de músicas, os dados vem da api do deeazer", "Conta com a função de pesquisa para que o usuário encontre suas músicas e possa salva-las como favoritas"],
        skills:["ReactJS", "JSX", "Consumo de API", "localStorage"],
        githubPages: true,
        page : "https://tiagoviniciusdev.github.io/Dream-Music/"
    },

    {
        name:"Site de animes",
        gitName:"Site-De-Animes",
        fileName:"SiteAnimes.webp",
        desc: ["Essa aplicação é basicamente um catálago de animes, suas informações são retiradas de uma api", "Você pode navegar ou pesquisar por um anime específico", "Dentre as informações extraidas da api estão nota, trailer, sinopse, nome e imagens. Infelizmente, devido a própria api, grande parte das informações estão em inglês"],
        skills: ["ReactJS", "JSX", "Consumo de API"],
        githubPages: true,
        page : "https://tiagoviniciusdev.github.io/Site-De-Animes/"
    },

    {
        name:"Lista de Tarefas",
        gitName:"Lista-De-Tarefas",
        fileName:"ListaDeTarefas.webp",
        desc:["Lista de tarefas com funções de criar, deletar e adicionar tarefas.", "Através do localStorage, as tarefas ficam salvas até que o navegador seja fechado."],
        skills:["ReactJS", "JSX", "TypeScript", "localStorage"],
        githubPages: true,
        page : "https://tiagoviniciusdev.github.io/Lista-De-Tarefas/"
    }
]

export default ProjectsData