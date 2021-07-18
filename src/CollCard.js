import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CollCard(props) {
  return (
   <div class="collCard" id="collCard">
       <img class="collImg" id="collImg" src={props.image}></img>
        <div class="collInfo" id="collInfo">
            <p class="collName">{props.name}</p>
            <p class="collFollow">{props.followers}</p>
            <p class="collTracks">{props.tracks}</p>
            <p class="collArtists">
                Browse
            </p>
        </div>
   </div>

  );
}

export default CollCard;