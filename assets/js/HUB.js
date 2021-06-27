
var didSearch = 0;

var UI = document.getElementById("UI");
var Main = document.getElementById("main");
var collHub = document.getElementById("collHub");
var Hub = document.getElementById("Hub");





var playeractive = 0;
var player = document.getElementById("uiBottom");


var songTitle = document.getElementById("playerTitle");
var songArtist = document.getElementById("playerArtist");
var activeSong = document.getElementById("audioPlayer");
var playIcon = document.getElementById("playIcon");






var previousUID = "";
var previousTID = "";

var activeUID = "";
var activeTID = "";
var activeCID = "";


var collectives = {};

//// phuture ///// 
collectives[0] = { id : "Wem1e" , members: [ "Wem1e", "DBxA9" , "epyGn" , "nogRn" , "n08jM", "no6ve", "LxJqY", "D7Mgn", "no2B5", "nZa4e", "epzvz", "n1OXD", "L5z7D" ]};

///// SRS /////
collectives[1] = { id : "aARVA" , members: [ "aARVA", "wP7Vj" , "z8pkZ" , "v7QwK" , "Axdjv", "yg5WE", "eJj3k"]};


var members = [];
var usertracks = [];

initLoad();











UI.style.display = "none";
Hub.style.display = "none";





function clickFunction() {
  if (Hub.style.display == "none") {

    showHUB();
    
  } else {
    Hub.style.display = "none";
}
}; 


////// pulls data for collective GRID //////

function initLoad(){ 


    arrayLength = Object.keys(collectives).length;



    for (var i = 0; i < arrayLength; i++) {

        
        
    const userURL = 'https://dn2.monophonic.digital/v1/users/' + collectives[i].id;
    

    Promise.all([
	fetch(userURL)
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
    data = data[0].data
    collDraw(data, x);
     
}).catch(function (error) {
	
    initRetry(userURL);
}); 

members[collectives[i].id] = collectives[i].members;




    
};

};

function initRetry(url1){ 

    Promise.all([
        fetch(url1)
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        data = data[0].data;
        
            collDraw(data);
           
    }).catch(function (error) {
        // if there's an error, log it
        
        initRetry(url1);    
     
    });

};


////// draws collective GRID /////

function collDraw(data){

    

    collcard = document.createElement("div");
    collcard.setAttribute("class", "collCard");
    collcard.setAttribute("id","collCard");
    collcard.addEventListener ('click', function(){
        

        activeCID = data.id;
        onLoad(data);
   
    });

    collInfo = document.createElement('div');
    collInfo.setAttribute("class", "collInfo");
    collInfo.setAttribute("id", "collInfo");

    collImg = document.createElement("img")
    collImg.setAttribute("class", "collImg");
    collImg.setAttribute("id","collImg");
    collImg.setAttribute("src", data.profile_picture['150x150']);
    

    collName = document.createElement("p")
    collName.setAttribute("class", "collName");
    collName.setAttribute("id","collName");
    collName.innerHTML = "(" + data.name + ")";

    collFollow = document.createElement('p')
    collFollow.setAttribute("id","collFollow");
    collFollow.setAttribute("class","collFollow");
    collFollow.innerHTML =  data.follower_count + ' FOLLOWERS';

    collTracks = document.createElement('p')
    collTracks.setAttribute("id","collFollow");
    collTracks.setAttribute("class","collFollow");
    collTracks.innerHTML =  data.track_count + " RELEASES";

    collArtists = document.createElement('p')
    collArtists.setAttribute("id","collArtists");
    collArtists.setAttribute("class","collArtists");
    collArtists.innerHTML = "> BROWSE <"

    

    collInfo.appendChild(collName);
    collInfo.appendChild(collFollow);
    collInfo.appendChild(collTracks);
    collInfo .appendChild(collArtists);
    
    
    

    collcard.appendChild(collImg);
    collcard.appendChild(collInfo);
    collHub.appendChild(collcard);  
};
    




function onLoad(data){



Hub.innerHTML = "";
   
var localmembers = members[data.id]
var arrayLength = members[data.id].length;

    ///// loops through members array and pulls user and track info from auius api ///////// 

for (var i = 0; i < arrayLength; i++) {

const userURL = 'https://dn2.monophonic.digital/v1/users/' + localmembers[i];
const trackURL = 'https://dn2.monophonic.digital/v1/users/' + localmembers[i] + '/tracks?';
    

    Promise.all([
	fetch(userURL),
	fetch(trackURL)
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {

    analysis (data);
   
       

       
        
}).catch(function (error) {
	// if there's an error, log it
    fetch_retry(userURL,trackURL);
}); 
 
    
};
clickFunction();
    
};



////// retry the fetch //////// 

function fetch_retry( url1, url2) {

    Promise.all([
        fetch(url1),
        fetch(url2)
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
            analysis(data);
           
    }).catch(function (error) {
        // if there's an error, log it
        
        fetch_retry(url1, url2);    
     
    });

};



//////// do with fetch results //////// 
function analysis(data){ 

    const userinfo = data[0].data;
    const trackinfo = data[1].data ;
    const userid = userinfo.id
    usertracks[userid] = trackinfo;
    spawnCards(userinfo, trackinfo);

};



////// creates a div and attaches it to the 'artist hub '///////

function spawnCards (userinfo, trackinfo){



    const prof = (userinfo.profile_picture['150x150']);   


        handle = "https://www.audius.co/" + userinfo.handle;

    



   
    
    
    hubCard = document.createElement('div')
    hubCard.setAttribute("id","hubCard");
    hubCard.setAttribute("class","hubCard");
    hubCard.addEventListener ('click', function(){
        

        isActive(this);
   

    });
    
    cardPic= document.createElement('img')
    cardPic.setAttribute("id","cardPic");
    cardPic.setAttribute("class","cardPic");
    
    cardName = document.createElement('p')
    cardName.setAttribute("id","cardName");
    cardName.setAttribute("class","cardName");
    
   
    
    
    
    cardFollowers = document.createElement('p')
    cardFollowers.setAttribute("id","cardFollowers");
    cardFollowers.setAttribute("class","cardFollowers");
    
    cardFollowing = document.createElement('p')
    cardFollowing.setAttribute("id","cardFollowing");
    cardFollowing.setAttribute("class","cardFollowing");
    
    trackCount = document.createElement('p');
    trackCount.setAttribute("id","trackCount");
    trackCount.setAttribute("class","trackCount");
    
    
    sep = document.createElement("hr");
    
    cardBio = document.createElement('p')
    cardBio.setAttribute("id","cardBio");
    cardBio.setAttribute("class","cardBio");
    
    cardTracks = document.createElement('div')
    cardTracks.setAttribute("class","cardTracks")
    cardTracks.setAttribute("id","cardTracks")
    
    trackList =  document.createElement('h1')
    trackList.innerHTML = userinfo.track_count + " Releases";
    
    
    
    cardHandle = document.createElement('a')
    cardHandle.setAttribute("href", handle)
    cardHandle.setAttribute("target", "_blank");
    cardHandle.setAttribute("id","cardHandle");
    cardHandle.setAttribute("class","cardHandle")
    cardHandle.innerHTML = ("Audius Profile");
    
    

    
        

        cardPic.onerror = function () {
            this.src = "/images/user.png";
        };

        cardPic.src = prof;
       


   
   cardName.innerHTML = userinfo.name ;
   cardFollowers.innerHTML =  '<i class="fas fa-user"></i>' + ' ' + userinfo.follower_count;
   cardFollowing.innerHTML = userinfo.followee_count + " Following";
   cardBio.innerHTML = userinfo.bio;
    
    
    
    var tracks = userinfo.track_count;
    
    if (tracks == 1){
        trackCount.innerHTML = "> " + userinfo.track_count + " Release" + " <";
        
    } else {
        trackCount.innerHTML = "> " + userinfo.track_count + " Releases" + " <";
        
    };
       
    
        
        
      
    hubCard.appendChild(cardPic);
    hubCard.appendChild(cardName);
    hubCard.appendChild(cardFollowers);
    hubCard.appendChild(trackCount);
    hubCard.appendChild(cardTracks);
    hubCard.appendChild(cardHandle);
    
    cardTracks.appendChild(trackList);
    
    for (var i = 0; i < trackinfo.length; i++) {
        spawnTracks(trackinfo[i],hubCard)
    };
    

    Hub.appendChild(hubCard);
    
};


function showHUB() { 
    
    Main.style.display = "none";
    UI.style.display = "block";
    Hub.style.display = "block";
    
};

var activeCard = "" ;
var same = "";
    


///// detection for open artist cards ////// 
function isActive(x){
    
    if (playeractive == 1){
        
    };
    
    
    if (activeCard == ""){
        
        x.querySelector("div[class='cardTracks']").style.display='block'
        
        activeCard = x;
        
    } 
    
    else 
    {
       if (activeCard == x && same !== 1){
            
            activeCard.querySelector("div[class='cardTracks']").style.display='none';
           
            activeCard = x;
           same = 1;
        
    } else {
        activeCard.querySelector("div[class='cardTracks']").style.display='none';
        
        x.querySelector("div[class='cardTracks']").style.display='block'
        
        activeCard = x;
        same = 0;
    }
        
        
        
    };
    
    

        
        
    };






////// gets all of user tracks and attaches divs under artist /////// 

function spawnTracks(info, track){
    
    
    var x = track.querySelector("div[class='cardTracks']");
    
    var user = info.user['name']; 

    

    
    tr = document.createElement("div");
    tr.setAttribute("class", "trackCard");
    tr.setAttribute("id","trackCard");
    tr.addEventListener ('click', function(){
        
        event.stopPropagation();
        
        
        findTrack(info.user['id'],info.id, false)

    });
    
    tr.style.backdrop = "blur(10px)";
    

    trtitle = document.createElement("p");    
    trtitle.innerHTML = (info.title);

    trtrackinfo = document.createElement("table");
    trtrackinfo.setAttribute("class","trackinfotable");
    trtrackinfo.setAttribute("id","trackinfotable");


    trlikes = document.createElement("th");
    trlikes.innerHTML = '<i class="fas fa-heart"></i>' + info.favorite_count;
    trlikes.style.fontSize = "12px";

    trrepost = document.createElement("th");
    trrepost.innerHTML = '<i class="fas fa-retweet"></i>' + info.repost_count
    trrepost.style.fontSize ="12px";

    trtrackinfo.appendChild(trlikes);
    trtrackinfo.appendChild(trrepost);

    
    
    tr.appendChild(trtitle);
    tr.appendChild(trtrackinfo);
    x.appendChild(tr);
   
};



///// gets streamable URL for track and autoplays on interface ////
function findTrack (UID,TID,Next){

    var playlist = usertracks[UID];
    
    
    foundTrack = false;

    if ( activeTID == TID && Next == false){
            activeSong.currentTime = 0;
       
    } else {



    if (Next == false){

        for (var i = 0; foundTrack == false; i++) {

            x = playlist[i];
    
            if (x.id == TID && i !== playlist.length) {
                
                activeTID = TID;
                activeUID = UID;
                foundTrack = true;
                streamTrack(TID);
                songTitle.innerHTML = x.title
                songArtist.innerHTML = x.user['name']
                
 
            };
                  
        };
    };

    if (Next == true){

        for (var i = 0; foundTrack == false; i++) {
            x = playlist[i];

            if (x.id == activeTID){
                    previousTID = activeTID;
                    previousUID = activeUID;

                if (i == playlist.length - 1)
                {   

                    x =  playlist[0];
                    activeTID = x.id
                    activeUID = x.user["id"];
                    
                } else {
                    x = playlist[i+1];
                    activeUID = x.user['id'];
                    activeTID = x.id;
                };

                songTitle.innerHTML = x.title
                songArtist.innerHTML = x.user['name']
                streamTrack(x.id);
                foundTrack = true;  
            };
                   
            


        };

    };
        


    };



    activeSong.onended = (event) => {
        
        findTrack(activeUID, activeTID, true);
      };
    

 
};


function streamTrack(trackid){ 

    fetch('https://discoveryprovider2.audius.co/v1/tracks/'+trackid +'/stream?app_name=EXAMPLEAPP',
    {
      method: 'GET'
    
    })
    .then(function(res) {
        
        
        
        activeSong.setAttribute("src", res.url +"?nocache=");
        activeSong.play();
        playIcon.setAttribute("class","fas fa-pause");
        isPlaying = true;
        activeSong.style.display = "inline";
        
        
        
    });


 };




 ////// audio player ////// 


 var isPlaying = false;
 function audioPlay(){ 


    if (isPlaying == false) {

        let sauce = activeSong.getAttribute("src");


        if (sauce == ""){

            const x = [Math.floor(Math.random() * members[activeCID].length)];
            var randUser = members[activeCID][x];
            
                


            var trackies = usertracks[randUser];
            

            const y = [Math.floor(Math.random() * trackies.length)];
            var randTrack = trackies[y];

            

            var U = randTrack.user['id'];
            var T  = randTrack.id;

            findTrack(U,T,false);
            

        } else
        {
            activeSong.play();
            isPlaying = true;
            playIcon.setAttribute("class","fas fa-pause");
            
        };
        
        
    } else {

        if (isPlaying == true) {
            activeSong.pause();
            isPlaying = false;
            playIcon.setAttribute("class","fas fa-play");
            
        };

    };

    

    
 };

 function audioNext(){
     
    if (activeUID == "" && activeTID == ""){

    } else {
        findTrack(activeUID, activeTID, true);

    };

    
 };

 function audioPrev(){ 
    if (previousUID == "" && previousTID == ""){ 

    } else { 
    findTrack(previousUID, previousTID, false);
    };

 };












    
    
    
    







        
          
        
        

    
  
    

    
