import './Contact.css'

import Data from '../../Const'

function Contact() {

  return (
    <section className='Contact' id='contato'>
        <div className='container2'>
          <p>Desenvolvido por <a href={Data.LinkedinLink} rel="noreferrer" target="_blank">Tiago Vinicius</a></p>
        </div>
    </section>
  )
}

export default Contact