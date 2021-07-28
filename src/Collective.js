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
                  <div class="containerReleases" Style="display: block;">
                    <TrackCard></TrackCard>
                  </div>
                    
                </div>
                
                <footer id="footer"></footer>
                 
            </div> 
        </div>
        
    </body>
  );
}


function TrackCard(){
  return(<div className="trackCard">
    <img className="trArt"></img>
    <div className="trContainer">
      <p>

      </p>
      <table className="trackinfotable"></table>
    </div>
  </div>);
}

function HubCard(props){
  return(
    <div className="hubCard">
      <img className="cardPic"></img>
      <p className="cardName"></p>
      <p className="cardFollowers">
        <i className="fas fa-user"></i>
      </p>
      <p className="trackCount"></p>
      <div className="cardTracks"></div>
      <a href=""></a>
    </div>
  );
}

