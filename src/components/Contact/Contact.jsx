import './Contact.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Data from '../../Const';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  AOS.init();

  return (
    <section className='Contact' id='contato'>
        <div className='container2'>
            <p>Que tal dizer oi?</p>
            <h1>Entre em contato</h1>
            <p>Desenvolvedor Web Fullstack especializado em soluções modernas e eficientes. Proativo e focado em entregar resultados de qualidade, estou pronto para enfrentar desafios e agregar valor à sua equipe. Vamos conversar?</p>
            <div className='optionsOfContact'>
              <a href={Data.LinkedinLink} rel="noreferrer" target="_blank" title="Linkedin"><FaLinkedin /></a>
              <a href={Data.GitHubLink} rel="noreferrer" target="_blank" title="Github"><FaGithub /></a>
              <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
            </div>
            <a href={`./cv/${Data.curriculo}`} download={Data.curriculo} data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="-80">Download Curriculo</a>
        </div>
    </section>
  )
}

export default Contact