import { HelmetProvider } from 'react-helmet-async'
import SEO from './components/SEO'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <main className="font-space bg-white dark:bg-gray-900 text-primary dark:text-white">
          <SEO />
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App