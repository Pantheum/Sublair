import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CollCard(props) {
  
  
  return (    
    <Link to={`/${props.link}`}>
        <div className="collCard" id="collCard">
            <img className="collImg" id="collImg" src={props.image}></img>
                <div className="collInfo" id="collInfo">
                    <p className="collName">{props.name}</p>
                    <p className="collFollow">{props.followers}</p>
                    <p className="collTracks">{props.tracks}</p>
                    <p className="collArtists">
                        BROWSE
                    </p>
                </div>
        </div>
    </Link>

  );
}

export default CollCard;