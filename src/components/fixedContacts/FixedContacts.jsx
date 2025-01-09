import "./FixedContacts.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Data from '../../Const'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function FixedContacts() {

    AOS.init();

    return (
        <div className="FixedContacts">
            <div className="container">
                <div className="contacts">
                    <a href={Data.LinkedinLink} rel="noreferrer" target="_blank" title="Linkedin"><FaLinkedin /></a>
                    <a href={Data.GitHubLink} rel="noreferrer" target="_blank" title="Github"><FaGithub /></a>
                    <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
                </div>
            </div>
        </div>
    );
}

export default FixedContacts;
