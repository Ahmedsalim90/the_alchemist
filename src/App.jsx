import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './sections/Hero'
import SelectedWork from './sections/SelectedWork'
import AlchemistMethod from './sections/AlchemistMethod'
import DesignEngineering from './sections/DesignEngineering'
import Toolbox from './sections/Toolbox'
import About from './sections/About'
import Lab from './sections/Lab'
import Collaboration from './sections/Collaboration'
import GithubCode from './sections/GithubCode'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AlchemistMethod />
        <DesignEngineering />
        <Toolbox />
        <About />
        <Lab />
        <Collaboration />
        <GithubCode />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App