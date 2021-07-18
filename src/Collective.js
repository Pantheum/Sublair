import './Sublair.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sublair from './Sublair.js'



function Collective(props) {
  return (
      <body>
        
        <div>
            <div class="scanlines" id="scanlines"></div> 
            <div class="UI" id="UI"></div>
            <div id="wrapper">
                
                <div class="Hub">
                
                  <p id="navHome" class="navHome"><Link to='/'> &lt; sublair</Link></p>
                  <div class="headerDiv">
                    <img class="headerImg" src={props.image}></img>
                    <p class="headerName">{props.name}</p>
                    <p class="headerArtists">{props.releases}</p>
                  </div>
                  <table class="nav">
                    <tr>
                      <th id="navTracks" class="navTracks">Releases</th>
                      <th id="navArtists" class="navArtists">Artists</th>
                      <th id="navLinks" class="navLinks">Links </th>
                    </tr>
                  </table>

                </div>
                <footer id="footer"></footer>
                 
            </div> 
        </div>
        
    </body>
  );
}

export default Collective;
