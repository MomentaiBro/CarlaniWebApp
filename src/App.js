import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <NavBar/>
        <Switch>
          <Route component={ About } path="/about"/>
          <Route component={ Services } path="/services"/>
          <Route component={ Contact } path="/contact"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
