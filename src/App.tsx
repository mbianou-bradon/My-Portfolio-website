import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-primary text-white font-mono [&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200">
      <NavBar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
