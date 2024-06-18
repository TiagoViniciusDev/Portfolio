import './Work.css'
import Data from '../../Const'

import { FaGlobe, FaInstagram , FaWhatsapp } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";

function Work() {

  return (
    <section className='Work' id='trabalho'>
        <div className='container2'>
            <h2 className='title'><TiArrowSortedUp/> Trabalho</h2>
            <div className='workContent'>
                <div className='workDesc'>
                  <p>Trabalho no momento como freelancer, uso o nome <a href={Data.FreelancerSite} target='_blank' rel="noreferrer">IdealWebsites</a> como marca</p>
                  <div className='freelancerSocialMedia'>
                    <h3>Minhas redes sociais como <span>freelancer</span></h3>
                    <div className='workIcones'>
                      <a href={Data.FreelancerSite} target='_blank' rel="noreferrer" title='Site'><FaGlobe /></a>
                      <a href={Data.FreelancerInstagram} target='_blank' rel="noreferrer" title='Instagram'><FaInstagram /></a>
                      <a href={Data.FreelancerWhatsapp} target='_blank' rel="noreferrer" title='Whatsapp'><FaWhatsapp /></a>
                    </div>
                  </div>
                </div>
                <a href={Data.FreelancerSite} className='imgContainer' target='_blank' rel="noreferrer">
                  <div className='idealWebsitesImg'></div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Work