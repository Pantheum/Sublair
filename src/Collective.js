import './Sublair.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sublair from './Sublair.js'
import {useParams} from "react-router-dom";
import React from 'react';

import {collectives} from './collectivesMetaData.js';
import { createPortal } from 'react-dom';




const CollectiveDetails = () => {
  const { collectiveName } = useParams();
  /* search JSOn file for that name and then fetch the corresponding data
  to populate the collective object*/

  /*
  otherwise return a 404 page
  */
  return (
    
    <div>
    {/* match the collective name to the pairing in the file
          then fetch the data
          then assign data to the collective object*/}
  {
          collectives.map((curCollective) =>
                        {if(curCollective.name === collectiveName){
                          
                          console.log("this collective matchs the url " + curCollective.name)
                          


                          return(<Collective> </Collective>

                          );
                        }
                        
                        }
                        
                          
                        )
                        
                        }
                        404 {collectiveName}
                        
                        
   
    </div>
    
);
}

 

export default CollectiveDetails;


function Collective(props) {
  return (
      <body>
        
        <div>
            <div className="scanlines" id="scanlines"></div> 
            <div className="UI" id="UI"></div>
            <div id="wrapper">
                
                <div className="Hub">
                
                  <p id="navHome" className="navHome"><Link to='/'> &lt; sublair</Link></p>
                  <div className="headerDiv">
                    <img className="headerImg" src={props.image}></img>
                    <p className="headerName">{props.name}</p>
                    <p className="headerArtists">{props.releases}</p>
                  </div>
                  <table className="nav">
                    <tr>
                      <SelectionContainer ></SelectionContainer>
                    </tr>
                  </table>

                  
                 
                    
                </div>
                
                <footer id="footer"></footer>
                 
            </div> 
        </div>
        
    </body>
  );
}

class SelectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleReleasesClick = this.handleReleasesClick.bind(this);
    this.handleArtistClick = this.handleArtistClick.bind(this);
    this.handleLinksClick = this.handleLinksClick.bind(this);
    this.state = {tab: 'releases'}
  }
  handleReleasesClick() {
    this.setState({tab: 'releases'});
  }
  handleArtistClick(){
    this.setState({tab: 'artists'});
  }
  handleLinksClick(){
    this.setState({tab: 'links'});
  }

  render() {
    const tab = this.state.tab;
    let button;

    if(tab === 'releases'){
      button = <TrackCard></TrackCard>
    }
    else if(tab === 'artists'){
      /*const url = "https://dn2.monophonic.digital/v1/users/"+ props.collective.id;*/
      
      button = <HubCard></HubCard>
    }
    else if(tab === 'links'){
      button = <div>LINKS</div>
    }

    return (
      <div>
      <th id="navTracks" className="navTracks" onClick={this.handleReleasesClick}>Releases</th>
      <th id="navArtists" className="navArtists" onClick={this.handleArtistClick}>Artists</th>
      <th id="navLinks" className="navLinks" onClick={this.handleLinksClick}>Links </th>
      
      <div id="" className="containerReleases" Style="display: block;">
         {button}
      </div>
   
      </div>
    );
  }
  
  
}

function TrackCard(props){
  return(<div className="trackCard">
    <img className="trArt">{props.image}</img>
    <div className="trContainer">
      <p>
        {props.trackName}
      </p>
      <table className="trackinfotable">
        
      </table>

    </div>
  </div>);
}

function HubCard(props){
  return(
    <div className="hubCard">
      <img className="cardPic" src={props.image}>

      </img>
      <p className="cardName">
        {props.cardName}
      </p>
      <p className="cardFollowers">
          <i className="fas fa-user">
          {props.cardFollowers}</i>
      </p>
      <p className="trackCount">
        {props.trackCount}
      </p>
      <div className="cardTracks">
        
      </div>
      <a href=""></a>
    </div>
  );
}


