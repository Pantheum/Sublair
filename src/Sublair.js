import './Sublair.css';

import CollCard from './CollCard.js';

import subLair from "./images/SubLair.png"
import FetchCollective from './FetchCollective';
import collectiveMetaData from './collectiveMetaData.json';
function Sublair() {
    const idList = ["D2oRp", "aARVA", "nogRn"];
 
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
                            idList.map((curId) =>
                        <FetchCollective id={curId} key={curId}></FetchCollective>)
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
