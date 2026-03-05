import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhoIsItFor from './components/WhoIsItFor/WhoIsItFor'
import Advantages from './components/Advantages/Advantages'
import FAQ from './components/FAQ/FAQ'
import OurResults from './components/OurResults/OurResults'
import AppDownload from './components/AppDownload/AppDownload'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhoIsItFor />
        <Advantages />
        <FAQ />
        <OurResults />
        <AppDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App

