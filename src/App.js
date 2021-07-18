import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sublair from './Sublair.js'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Sublair}></Route>
      </Switch>
      </Router>

  );
}

export default App;
