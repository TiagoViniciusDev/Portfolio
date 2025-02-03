import './About.css'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs, SiJest, SiPrisma } from "react-icons/si";

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
                    <p>Olá, me chamo <span>Tiago Vinicius</span>, tenho 23 anos.</p>
                    <p>Sou um <span>Desenvolvedor web FullStack</span> (Frontend e Backend), apaixonado pela área de tecnologia</p>
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
                                <BiLogoTypescript />
                                <p>TypeScript</p>
                            </div>
                            <div className='skill'>
                                <FaReact />
                                <p>ReactJS</p>
                            </div>
                            <div className='skill'>
                                <FaReact />
                                <p>React Native</p>
                            </div>
                            <div className='skill'>
                                <SiNextdotjs />
                                <p>Next</p>
                            </div>
                            <div className='skill'>
                                <IoLogoGithub />
                                <p>Github</p>
                            </div>
                            <div className='skill'>
                                <FaNodeJs />
                                <p>NodeJS</p>
                            </div>
                            <div className='skill'>
                                <SiTailwindcss />
                                <p>TailwindCSS</p>
                            </div>
                            <div className='skill'>
                                <FaDocker />
                                <p>Docker</p>
                            </div>
                            <div className='skill'>
                                <SiPrisma />
                                <p>Prisma ORM</p>
                            </div>
                            <div className='skill'>
                                <FaAws />
                                <p>AWS</p>
                            </div>
                            <div className='skill'>
                                <SiJest />
                                <p>Jest</p>
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