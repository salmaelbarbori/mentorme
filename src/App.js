import './App.css';
import Home from './Components/Home';
import About from './Components/About.js';
import Testimonials from './Components/Testimonials.js';
import Footer from './Components/Footer.js';
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
