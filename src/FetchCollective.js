import React from 'react';

export default class FetchCollective extends React.Component {
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
      console.log(url);
      /*const url = "https://api.randomuser.me/";*/
      const response = await fetch(url);
      const data = await response.json();
      /*console.log(data.data.id);*/
      /*this.setState({ person: data.results[0], loading: false });*/
      this.setState({ collective: data.data, loading: false });
  
      /*
      console.log(data.data.handle);
      <div>{data.data.handle}</div>*/
      
    }
    
  
    render() {
      if (this.state.loading) {
        return <div>loading failed</div>;
      }
  
      if (!this.state.collective) {
        return <div>Collective unReachable</div>;
      }
      console.log(this.state.collective.name)
      return (

        <collective 
        image={this.state.collective.profile_picture['150x150']}
        name={this.state.collective.name} 
        >
        </collective>
      );
    }
  }
  