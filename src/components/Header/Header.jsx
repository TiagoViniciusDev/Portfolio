import "./Header.css"
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from "react";

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {

    AOS.init();

   const [menuMobile, setMenuMobile] = useState(false)
   const [animationCloseMenuMobile, setAnimationCloseMenuMobile] = useState(false)

   //Sistema Janela Modal
    useEffect(() => {
        document.getElementById('MOBILENAV').addEventListener('click', function(){
            closeMobileNavAnimation()
        })

        document.getElementById('ToggleMobileMenu').addEventListener('click', function(e){
            setMenuMobile(true)
            e.stopPropagation()
        })

        document.getElementById('OutMenuMobile').addEventListener('click', function(){
            closeMobileNavAnimation()
        })
       
    },[])

    function closeMobileNavAnimation(){
        setMenuMobile(false)

        setAnimationCloseMenuMobile(true)

        setTimeout(function() {
            setAnimationCloseMenuMobile(false)
        }, 1100);
    }

    return (
        <header className="Header">
            <div className="container">
                <div className="logo"></div>
                <nav className="pcNav">
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    {/* <a href="#trabalho">Trabalho</a> */}
                    <a href="#contato">Contato</a>
                </nav>
                <div className="toggleMobileMenu" id="ToggleMobileMenu">
                    <IoIosMenu />
                </div>
                <div className={`mobileNav ${menuMobile ? "showNavAnimation" : ""} ${animationCloseMenuMobile ? "hiddenNavAnimation" : ""}`} >
                    <IoClose onClick={() => {closeMobileNavAnimation()}}/>
                    <nav id="MOBILENAV">
                        <a href="#home">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#projetos">Projetos</a>
                        {/* <a href="#trabalho">Trabalho</a> */}
                        <a href="#contato">Contato</a>
                    </nav>
                </div>
                <div id="OutMenuMobile" className="shadown" style={menuMobile ? {display: "block"} : {display: "none"}}></div>
            </div>
        </header>
    );
}

export default Header;
