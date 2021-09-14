import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
