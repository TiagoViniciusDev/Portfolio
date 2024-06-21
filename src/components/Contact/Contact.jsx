import './Contact.css'
import { FaWhatsapp , FaGithub, FaLinkedin } from "react-icons/fa";
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
            <p>Ter um site pode aumentar significativamente suas vendas e transmitir mais credibilidade aos seus clientes. Todas as grandes empresas possuem um site. Não fique para trás de seus concorrentes</p>  
            <div className='optionsOfContact'>
              <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" title="Whatsapp"><FaWhatsapp /></a>
              <a href={Data.LinkedinLink} rel="noreferrer" target="_blank" title="Linkedin"><FaLinkedin /></a>
              <a href={Data.GitHubLink} rel="noreferrer" target="_blank" title="Github"><FaGithub /></a>
              <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
            </div>
            <a href="./cv/curriculo.docx" download="curriculo.docx" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="-80">Download Curriculo</a>
        </div>
    </section>
  )
}

export default Contact