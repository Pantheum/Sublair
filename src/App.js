import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Sublair from './Sublair.js'
import CollectiveDetails from './Collective.js'

function App() {
  return (
  
    
    <Router>
      <Switch>
        <Route path="/" exact component={Sublair}></Route>
        
        <Route path="/:collectiveName">
        <CollectiveDetails></CollectiveDetails>
          </Route> 
      </Switch>
      </Router>


    

  );
}

export default App;
