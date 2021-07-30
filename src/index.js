import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import Toggle from './Toggle'

import {collectives} from './collectivesMetaData.js';

import Collective from './Collective';


function HubCard(props){
  return(
    <div className="hubCard">
      <img className="cardPic" src={props.image}>
        {console.log("THe image is "+ props.image)}
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

class FetchArtist extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    loading: true,
    collective: null
  };

  async componentDidMount() {
    
    
    const url = "https://dn2.monophonic.digital/v1/users/" + this.props.id;
    console.log(url);
  
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ artistData: data.data, loading: false });
    
  }
  render() {
    if (this.state.loading) {
      return <div></div>;
    }
    else{
    console.log(this.state.artistData)
    return (
      
      <HubCard image={this.state.artistData.profile_picture['150x150']}
        cardName={this.state.artistData.name}
        cardFollowers={this.state.artistData.follower_count}
        trackCount={this.state.artistData.track_count}
      ></HubCard>
     
    );
    }
  }

}




{console.log(collectives[0].members[0])}

function RenderCollectiveList(props){
  
    return(<div>
      {props.Collective.members.map((curArtist) =>
        
        <FetchArtist id={curArtist}></FetchArtist>
        
        )}
    </div>);
  
}
ReactDOM.render(
  
 
  /*<RenderCollectiveList Collective={collectives[0]}></RenderCollectiveList>*/
    /*<FetchArtist id={collectives[0].members[0]}></FetchArtist>*?
    
   /*
    <Toggle></Toggle>
    */
  <App></App>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
