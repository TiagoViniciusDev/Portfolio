import './About.css'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { TiArrowSortedUp } from "react-icons/ti";

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  AOS.init();

  return (
    <section className='About' id='sobre'>
        <div className='container2'>
            <h2 className='title'>
                <TiArrowSortedUp />
                Sobre mim
            </h2>

            <div className='info'>
                <div className='desc'>
                    <p>Olá, me chamo <span>Tiago Vinicius</span>, tenho 22 anos.</p>
                    <p>Dou vida as minhas ideias usando <span>React</span> e <span>Node</span> criando sites otimizados de acordo com a demanda</p>
                    <div className='skillsContainer'>
                        <h3>Habilidades</h3>
                        <div className='skills'>
                            <div className='skill'>
                                <FaHtml5 />
                                <p>HTML</p>
                            </div>
                            <div className='skill'>
                                <FaCss3Alt />
                                <p>CSS</p>
                            </div>
                            <div className='skill'>
                                <RiJavascriptFill />
                                <p>JavaScript</p>
                            </div>
                            <div className='skill'>
                                <FaReact />
                                <p>ReactJS</p>
                            </div>
                            <div className='skill'>
                                <SiRedux />
                                <p>Redux</p>
                            </div>
                            <div className='skill'>
                                <IoLogoGithub />
                                <p>Github</p>
                            </div>
                            <div className='skill'>
                                <FaNodeJs />
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profileImg'>
                    <div className='img' data-aos="fade-up-left" data-aos-duration="1000"></div>
                    <div className='imgBorder' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="2000"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About