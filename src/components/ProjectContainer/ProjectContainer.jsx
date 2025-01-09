import './ProjectContainer.css'
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

function ProjectContainer({direction, data}) {

  const {name, gitName, fileName, desc, skills, githubPages} = data

  return (
    <div className={`ProjectContainer ${direction}`} data-aos="fade-right" data-aos-duration="1000">
        <div className='projectImgContainer'>
            <div className='projectImg' style={{'backgroundImage': `url(projectsImgs/${fileName})`}}></div>
        </div>
        <div className='projectInfo'>
            <div className='projectHeader'>
                <p>Projeto em destaque</p>
                <h2>{name}</h2>
            </div>
            <div className='projectDesc'>
                {desc ? desc.map((e) => (
                    <p key={`${name}${Math.floor(Math.random() * 100)}`}>{e}</p>
                )) : ""}
            </div>
            <div className='projectSkills'>
                {skills ? skills.map((e) => (
                    <p key={`${name}${Math.floor(Math.random() * 100)}`}>{e}</p>
                )) : ""}
            </div>
            <div className='projectLinks'>
                <a 
                    href={`https://github.com/TiagoViniciusDev/${gitName}`} 
                    title='Ver no Github' 
                    rel="noreferrer" 
                    target='_black'
                ><IoLogoGithub/></a>
                {
                    githubPages == true ?                 
                    <a 
                        href={`https://tiagoviniciusdev.github.io/${gitName}/`} 
                        title='Acessar Projeto' 
                        rel="noreferrer" 
                        target='_black'
                        ><TbExternalLink />
                    </a> 
                    : ""
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer