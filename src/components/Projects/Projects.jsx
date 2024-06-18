import './Projects.css'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { Link } from 'react-router-dom'

import { TiArrowSortedUp } from "react-icons/ti";
import ProjectsData from '../../ProjectsData';

function Projects() {

  function scrollZero(){
      window.scroll(0, 0)
  }

  const ProjectsData3 = ProjectsData.slice(0,3)

  return (
    <section className='Projects' id='projetos'>
        <div className='container2'>
            <h2 className='title'>
              <TiArrowSortedUp />
              Alguns do meus projetos
            </h2>
            <div className='featuredProjects'>
              {ProjectsData3.map((data, index) => (
                    <ProjectContainer
                        key={index}
                        direction={index % 2 === 0 ? "left" : "right"}
                        data={data}
                    />
                ))}
            </div>
            <Link to="projetos" onClick={() => {scrollZero()}}>Ver mais projetos</Link>
        </div>
    </section>
  )
}

export default Projects