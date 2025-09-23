import './App.css'
import Header from './components/layouts/Header'
import Sidebar from './components/layouts/Sidebar'
import HeroSection from './components/sections/HeroSection'
import AboutBluAzur from './components/sections/AboutBluAzur'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
      {/* Sections */}
      <HeroSection />
      <AboutBluAzur />

      {/* Layouts */}
      <Header />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
