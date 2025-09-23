import './ProjectContainer.css'
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";
import Data from '../../Const';

function ProjectContainer({direction, data}) {

  const {name, gitName, fileName, desc, skills, page} = data

  const userName = Data.GitHubLink.split("/").pop();

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
                    <p key={`${name} - ${Math.floor(Math.random() * 1000)}`}>{e}</p>
                )) : ""}
            </div>
            <div className='projectSkills'>
                {skills ? skills.map((e) => (
                    <p key={`${name} - ${Math.floor(Math.random() * 1000)}`}>{e}</p>
                )) : ""}
            </div>
            <div className='projectLinks'>
                <a 
                    href={`https://github.com/${userName}/${gitName}`} 
                    rel="noreferrer" 
                    target='_black'
                ><IoLogoGithub/><p>Ver no Github</p></a>
                {
                    page !== false ?                 
                    <a 
                        href={page} 
                        title='Acessar Projeto' 
                        rel="noreferrer" 
                        target='_black'
                        ><TbExternalLink /><p>Acessar Projeto</p>
                    </a> 
                    : ""
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer