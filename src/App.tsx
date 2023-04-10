import Footer from './components/Footer';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="bg-primary text-white font-mono">
      <NavBar />
      <Hero/>
      <IntroSection/>
      <Footer/>
    </div>
  );
}

export default App;
