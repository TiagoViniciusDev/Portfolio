### Inicializando projeto

```bash
npm install
```

### Executando projeto

```bash
npm run dev
```

### Seu cúrriculo
Dentro da pasta "cv" dentro de "public" coloque seu cúrriculo (curriculo.docx)

### Seus Links
Edite o arquivo "Const.js" e insirá suas informações

```bash
const Data = {
    LinkedinLink: LINK_DO_SEU_LINKEDIN,
    GitHubLink: LINK_DO_SEU_GITHUB,
    EmailLink: LINK_PARA_DIRECIONAR_PARA_SEU_EMAIL (mailto:SEU_EMAIL),
    curriculo: NOME_DO_ARQUIVO_DO_SEU_CURRICULO
}

export default Data
```

### Suas Imagens
Escolha uma logo e foto de perfil e as converta para ".webp" em alguns desses sites de conversão de imagem ou software
Dentro da pasta "img" dentro de "public" coloque sua logo e sua imagem de perfil, renomei elas para terem respctivamente os nomes "logo.webp" e "perfil.webp"

Recomendo: Logo com proporção 1:1 (512x512) e Perfil com (1366x768)

Dentro da pasta "projectsImgs" dentro de "public" coloque as imagens dos seus projetos

### Seus Projetos
Edite o arquivo "ProjectsData.js" e insirá seus projetos

```bash
const ProjectsData = [
    {   
        name: NOME_DO_SEU_PROJETO,
        gitName: NOME_DO_SEU_REPOSITORIO_NO_GITHUB,
        fileName: NOME_DO_ARQUIVO_IMG_DO_SEU_PROJETO,
        desc: [DESCRIÇÃO_DO_PROJETO],
        skills: [HABILIDADES_USADAS_NO_PROJETO],
        githubPages: false (Se o projeto está ou não no ar através do github pages)
    }
]

export default ProjectsData
```

Edite o href dos links na div "projectLinks" dentro do arquivo "ProjectContainer.jsx" inserindo seu github

```bash
<div className='projectLinks'>
    <a 
        href={`https://github.com/SEU_NOME_DE_USUÁRIO_NO_GIT_HUB/${gitName}`} 
        title='Ver no Github' 
        rel="noreferrer" 
        target='_black'
    ><IoLogoGithub/></a>
    {
        githubPages == true ?                 
        <a 
            href={`https://SEU_NOME_DE_USUÁRIO_NO_GIT_HUB.github.io/${gitName}/`} 
            title='Acessar Projeto' 
            rel="noreferrer" 
            target='_black'
            ><TbExternalLink />
        </a> 
        : ""
    }
</div>
```

### Sobre você
Edite o arquivo "About.jsx" com seu nome, descrição profissional e habilidades
Você pode importar icones para suas habilidades no site do React Icons