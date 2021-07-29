import './Sublair.css';

import CollCard from './CollCard.js';

import subLair from "./images/SubLair.png"
import FetchCollective from './FetchCollective';

import {collectives} from './collectivesMetaData.js';
function Sublair() {
    const collectiveMetaData = collectives
    
    
    
  return (
      <body>
        <div>
            <div className="scanlines" id="scanlines"></div> 
            <div className="UI" id="UI"></div>
            <div id="wrapper">
                <section id="main" Style="display: block;">
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
                        <FetchCollective id={curCollective.id} key={curCollective.id}></FetchCollective>)
                        
                        }
                    

                    </div>
                </section>
                <div className="Hub"></div>
                <footer id="footer"></footer>    
            </div> 
            
        </div>
    </body>
  );
}

export default Sublair;
