import './Sublair.css';
import subLair from "./images/SubLair.png"
import FetchCollCard from './FetchCollCard';

import {collectives} from './collectivesMetaData.js';
function Sublair() {
    const collectiveMetaData = collectives
    
    
    
  return (
      
        <div>
            <div className="scanlines" id="scanlines"></div> 
            <div className="UI" id="UI"></div>
            <div id="wrapper">
                <section id="main">
                    <div className="SubLair">
                        <img src={subLair}></img>
                        <p>the global underground music scene</p>
                        <p className="browse" id="browse"> ▼ Browse Collectives ▼ </p>
                    </div>
                    <div className="collHub" id="collHub">

                        {
                            /*
                            map the collectives to the id's listed above
                            */ 
                            collectiveMetaData.map((curCollective) =>
                        <FetchCollCard id={curCollective.id} key={curCollective.id}></FetchCollCard>)
                        
                        }
                    

                    </div>
                </section>
                <div className="Hub"></div>
                <footer id="footer"></footer>    
            </div> 
            
        </div>
    
  );
}

export default Sublair;
