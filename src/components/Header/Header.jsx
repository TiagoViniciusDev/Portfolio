import "./Header.css"
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useEffect, useState } from "react";

function Header() {

   const [menuMobile, setMenuMobile] = useState(false)

   //Sistema Janela Modal
    useEffect(() => {
        document.getElementById('MOBILENAV').addEventListener('click', function(){
            setMenuMobile(false)
        })

        document.getElementById('ToggleMobileMenu').addEventListener('click', function(e){
            setMenuMobile(true)
            e.stopPropagation()
        })

        window.addEventListener('click', function(){
            setMenuMobile(false)
        })
    },[])


    return (
        <header className="Header">
            <div className="container">
                <div className="logo"></div>
                <nav className="pcNav">
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#trabalho">Trabalho</a>
                    <a href="#contato">Contato</a>
                </nav>
                <div className="toggleMobileMenu" id="ToggleMobileMenu">
                    <IoIosMenu />
                </div>
                <div className="mobileNav" style={menuMobile ? {display: 'flex'} : {display: 'none'}}>
                    <IoClose onClick={() => {setMenuMobile(false)}}/>
                    <nav id="MOBILENAV">
                        <a href="#home">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#trabalho">Trabalho</a>
                        <a href="#contato">Contato</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
