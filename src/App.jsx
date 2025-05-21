import Navbar from './components/layout/Navbar/Navbar'
import Hero from './components/ui/hero/Hero'
import Projects from './components/pages/projects/Projects'
import Experience from './components/pages/experience/Experience'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </>
  )
}

export default App
