import logo from './logo.svg';
import './App.css';
import SideMenu from './components/sideMenu'
import AboutMe from './routes/aboutMe';
import Home from './routes/home';
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
      
    </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
