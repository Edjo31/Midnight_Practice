import logo from './logo.svg';
import './App.css';
import SideMenu from './components/sideMenu'
import AboutMe from './routes/aboutMe';
import Home from './routes/home';
import Projects from './routes/projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect,useState } from 'react';

function App() {

  return (
    <div className="App">
    <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" >  
            <SideMenu />
      </Route>
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      
    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
