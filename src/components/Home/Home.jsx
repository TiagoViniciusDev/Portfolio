import './Home.css'
import Data from '../../Const'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  AOS.init();

  return (
    <div className='Home' id='home'>
        <section className="container2">
            <p>Olá, eu sou</p>
            <h1>Tiago Vinicius.</h1>
            <h1>Desenvolvedor FullStack.</h1>
            <p>Programador empenhado a criar aplicações otimizadas e responsivas</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top">
              <a href={Data.EmailLink} rel="noreferrer" target="_blank">Entre em contato</a>
              <a href={`./cv/${Data.curriculo}`} target="_blank" rel="noopener noreferrer">Currículo</a>
            </div>
        </section>
    </div>
  )
}

export default Home
