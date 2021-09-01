import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Main from './components/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <div className="Main">
          <Switch>
            <Route component={ Main } path="/" exact/>
            <Route component={ About } path="/about"/>
            <Route component={ Services } path="/services"/>
            <Route component={ Contact } path="/contact"/>
          </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
