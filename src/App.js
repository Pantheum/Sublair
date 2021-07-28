import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sublair from './Sublair.js'
import Collective from './Collective.js'
import FetchCollective from './FetchCollective'

function App() {
  return (
  
/*<Collective></Collective>*/
    
    <Router>
      <Switch>
        <Route path="/" exact component={Sublair}></Route>
        
        <Route path="/:collectiveName">
          <Collective></Collective>
          </Route> 
      </Switch>
      </Router>


    

  );
}

export default App;
