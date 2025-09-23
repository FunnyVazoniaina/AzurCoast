import Header from './components/layouts/Header'
import Sidebar from './components/layouts/Sidebar'
import HeroSection from './components/sections/HeroSection'
import AboutBluAzur from './components/sections/AboutBluAzur'
import BestPlaceSection from './components/sections/BestPlaceSection'
import LocationSection from './components/sections/LocationSection'
import StartingPointSection from './components/sections/StartingPointSection'
import BookingSection from './components/sections/BookingSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layouts/Footer'


function App() {

  return (
    <>
      {/* Sections */}
      <HeroSection />
      <AboutBluAzur />
      <BestPlaceSection />
      <LocationSection />
      <StartingPointSection />
      <BookingSection />
      <ContactSection />

      {/* Layouts */}
      <Header />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
