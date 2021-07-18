import './Sublair.css';

import CollCard from './CollCard.js';

import subLair from "./images/SubLair.png"

function Sublair() {
    
  return (
      <body>
        <div>
            <div class="scanlines" id="scanlines"></div> 
            <div class="UI" id="UI"></div>
            <div id="wrapper">
                <section id="main" Style="display: block;">
                    <div class="SubLair">
                        <img src={subLair}></img>
                        <p>the global underground music scene</p>
                        <p class="browse" id="browse"> ▼ Browse Collectives ▼ </p>
                    </div>
                    <div class="collHub" id="collHub">
                        <CollCard name="test" followers="4" tracks="5" image="https://creatornode.audius.co/ipfs/QmZi6JZQzPAA871y2TuKdZfjVSgrSmYProYxGc4Qhf2gMk/150x150.jpg" link="./PUSH"></CollCard>
                        

                        

                    </div>
                </section>
                <div class="Hub"></div>
                <footer id="footer"></footer>    
            </div> 
            
        </div>
    </body>
  );
}

export default Sublair;
