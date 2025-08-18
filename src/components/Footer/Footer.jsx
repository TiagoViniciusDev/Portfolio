import './Footer.css'

import Data from '../../Const'

function Footer() {

  return (
    <footer className='Footer' id='contato'>
        <div className='container2'>
          <p>Desenvolvido por <a href={Data.LinkedinLink} rel="noreferrer" target="_blank">Tiago Vinicius</a></p>
          <p>Desenvolvedor FullStack</p>
        </div>
    </footer>
  )
}

export default Footer