import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import TweetPage from './TweetPage';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetails from './ItemDetails';


function App() {

  return (
    <Router>
    <div className='App'>
    <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={ItemDetails}/>
        <Route path="/tweet" component={TweetPage}/>
      </Switch>
    </div>
    </Router>
  );
  
}

export default App;
