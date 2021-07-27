import './Sublair.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sublair from './Sublair.js'
import {useParams} from "react-router-dom";

const CollectiveDetails = () => {
  const { collectiveName } = useParams();
  /* search JSOn file for that name and then fetch the corresponding data
  to populate the collective object*/

  /*
  otherwise return a 404 page
  */
  return (
    
    <div>{collectiveName}
    <Collective> </Collective>
    </div>
    
);
}

 

export default CollectiveDetails;


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


