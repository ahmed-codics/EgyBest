import About from "./components/About"
import Contact from "./components/Contact"
import FloatingContact from "./components/FloatingContact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <FloatingContact />
      <Footer />
    </div>
  )
}

export default App
