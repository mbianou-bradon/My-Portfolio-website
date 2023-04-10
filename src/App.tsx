import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-primary text-white font-mono">
      <NavBar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
