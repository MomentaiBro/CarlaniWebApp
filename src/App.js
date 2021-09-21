import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Testimonials />
    </div>
  );
}

export default App;
