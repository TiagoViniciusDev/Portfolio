import Header from '../Header/Header'
import FixedContacts from '../fixedContacts/FixedContacts'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <FixedContacts />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

export default Layout