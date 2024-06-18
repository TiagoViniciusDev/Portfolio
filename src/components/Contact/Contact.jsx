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
            <p>Sites comprovadamente aumentam as vendas e passam mais credibilidade aos clientes. Todas as grandes empresas tem um, então não fique para trás e adquira o seu</p>
            <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" data-aos="zoom-in" data-aos-duration="1000">Enviar Mensagem</a>
            <div className='optionsOfContact'>
              <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" title="Whatsapp"><FaWhatsapp /></a>
              <a href={Data.LinkedinLink} rel="noreferrer" target="_blank" title="Linkedin"><FaLinkedin /></a>
              <a href={Data.GitHubLink} rel="noreferrer" target="_blank" title="Github"><FaGithub /></a>
              <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
            </div>
        </div>
    </section>
  )
}

export default Contact