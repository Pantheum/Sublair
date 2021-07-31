import React from "react";
import CollCard from "./CollCard.js";

export default class FetchCollCard extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    loading: true,
    collective: null
  };

  async componentDidMount() {
    /*D2oRp */
    
    const url = "https://dn2.monophonic.digital/v1/users/" + this.props.id;
 
    /*const url = "https://api.randomuser.me/";*/
    const response = await fetch(url);
    const data = await response.json();
    /*console.log(data.data.id);*/
    /*this.setState({ person: data.results[0], loading: false });*/
    this.setState({ collective: data.data, loading: false });
    
  }
  

  render() {
    if (this.state.loading) {
      return <div></div>;
    }

    if (!this.state.collective) {
      return <div>Collective unReachable</div>;
    }
   
    return (
      
      <CollCard name={this.state.collective.name} 
      followers={this.state.collective.followee_count} 
      tracks={this.state.collective.track_count} 
      image={this.state.collective.profile_picture['150x150']}
       link={this.state.collective.name.split(" ").join("")}></CollCard>
      
    );
  }
}
