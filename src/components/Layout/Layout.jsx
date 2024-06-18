import Header from '../Header/Header'
import FixedContacts from '../fixedContacts/FixedContacts'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <FixedContacts />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Layout