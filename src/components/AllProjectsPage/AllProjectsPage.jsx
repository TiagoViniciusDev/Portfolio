import './AllProjectsPage.css'
import ProjectsData from '../../ProjectsData'
import ProjectContainer from "../ProjectContainer/ProjectContainer"
import FixedContacts from '../fixedContacts/FixedContacts'
import { Link } from 'react-router-dom'

function AllProjectsPage() {

  return (
    <section className="AllProjectsPage">
        <FixedContacts />
        <div className='container2'>
            <h2 className='title'>Meus Projetos</h2>
            <p>Confira abaixo alguns dos meus principais projetos. Para voltar para a página inicial <Link to="/">clique aqui!</Link></p>
            <div className='allProjects'>
                {ProjectsData.map((data, index) => (
                    <ProjectContainer
                        key={index}
                        direction={index % 2 === 0 ? "left" : "right"}
                        data={data}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default AllProjectsPage