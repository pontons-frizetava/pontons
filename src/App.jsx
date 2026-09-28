import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { SocialRail } from './components/SocialRail'
import { Footer } from './components/Footer'
import { QuoteBanner } from './components/QuoteBanner'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Pricing } from './sections/Pricing'
import { Gallery } from './sections/Gallery'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { CallModal } from './components/CallModal'

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <SocialRail />

      <main>
        <Hero />
        <Services />
        <Pricing />
        <QuoteBanner />
        <Gallery />
        <About />
        <Contact />
      </main>

      <Footer />
      <CallModal />
    </>
  )
}

export default App
