import './Home.css'
import Data from '../../Const'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  AOS.init();

  return (
    <div className='Home' id='home'>
        <div className="container2">
            <p>Olá, eu sou</p>
            <h1>Tiago Vinicius.</h1>
            <h1>Desenvolvedor FullStack.</h1>
            <p>Desenvolvo websites responsivos usando React e Node.</p>
            <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top">Entre em contato</a>
        </div>
    </div>
  )
}

export default Home
