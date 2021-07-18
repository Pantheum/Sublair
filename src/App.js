import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sublair from './Sublair.js'
import Collective from './Collective.js'
function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Sublair}></Route>
        <Route path="/Collective">
          <Collective></Collective>
        </Route>
        <Route path="/PUSH">
          <Collective></Collective>
          </Route> 
      </Switch>
      </Router>



  );
}

export default App;
