
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
collectives[0] = { 
    id : "Wem1e" , 
    members: [ "DBxA9" , "epyGn" , "nogRn" , "n08jM", "no6ve", "LxJqY", "D7Mgn", "no2B5", "nZa4e", "epzvz", "n1OXD", "L5z7D" ], 

    links: { 
        Instagram : "https://www.instagram.com/phuturecollective/" , 
        Twitter : "https://twitter.com/phuturecull" , 
        Audius : "https://audius.co/phuture" , 
        Website: "",
    }

};

///// SRS /////
collectives[1] = { 
    id : "aARVA" , 
    members: [ "9Rdy2", "wP7Vj" , "z8pkZ" , "v7QwK" , "Axdjv", "yg5WE", "eJj3k", "pZEkX", "NYaq4" , "OPx74" ],

    links: { 
        Instagram : "https://www.instagram.com/_smallroomsound/" , 
        Twitter : "https://twitter.com/_smallroomsound" , 
        Audius : "https://audius.co/smallroomsound" , 
        Website: "" 
    }
};

///// [sus]Collective /////// 
collectives[2] = { 
    id : "n0Mvj" , 
    members: [ "Dyxzr", "DrP38" , "emWwL" , "nZqpa", "n3AbE", "n6p8M", "n66bn", "Dy8GP", "DNYV0", "eJrke" , "LM40V" , "ebOzP", "DNzpY"],

    links: { 
        Instagram : "https://www.instagram.com/innersuscollective/" , 
        Twitter : "https://twitter.com/InnerSus" , 
        Audius : "https://audius.co/suscollective" , 
        Website: "",
    }
};

////// BONSAI /////// 
collectives[3] = { 
    id : "eJ7zn" , 
    members: [ "n1ER5", "eJ58d", "LKEMw" , "DvYRV", "DOWa4", "nd3me", "eJbde", "ezkz7", "ePWYm", "nogRn", "nVPPD", "LK7oL"],

    links: { 
        Instagram : "https://www.instagram.com/bonsaicollctive/" , 
        Twitter : "" , 
        Audius : "https://audius.co/bonsaicollct" , 
        Website: "",
    }
};

////// PUSH ////// 
collectives[4] = { id : "D2oRp" , 
members: [ "nlNjO" , "nqOPD" , "n3ARJ" , "LjNBB", "LR5MZ", "ez1xD", "D2gpe" , "eJ5p6" , "eJj2e" , "z8rjx" ],

links: { 
    Instagram : "https://www.instagram.com/push.collective/" , 
    Twitter : "" , 
    Audius : "https://audius.co/pushcollective" , 
    Website: "",
}

};

/////// NYT /////// 
collectives[5] = { id : "WQ7ao" ,
members: [ "Dy8GP", "nlNjO" , "DrQbO" , "L5Yz1" , "n18pd" , "eYvjv" , "WQzGK" , "DrP38" , "nQ5q4" , "eA3qL" , "LwrPb" , "LWdlj" , "lzamZ" , "em75j" , "ndm0J" , "emWwL" , "LW0vk", "LKE3y" ],
links: { 
    Instagram : "https://www.instagram.com/thenytclub/" , 
    Twitter : "" , 
    Audius : "https://audius.co/thenytclub" , 
    Website: "",
}
};

///// LEGION OF trap /////
collectives[6] = { 
    id : "MVKWZ" ,
     members: [ "VKxWy" , "n1E5X" , "D93xM"], 
     links: { 
         Instagram : "https://www.instagram.com/legionoftrap/" , 
         Twitter : "" , 
         Audius : "https://audius.co/legionoftrap" ,
         Website: "",
        }

    };


//// BrickWood //// 
collectives[7] = { 
    id : "XBzdR" , 
    members: [], 
    links: { 
        Instagram : "" , 
        Twitter : "https://twitter.com/BRKWDRCRD" , 
        Audius : "https://audius.co/brkwdrcrd" , 
        Website: "",
    }
};

////// uncomfy beats //////

collectives[1] = { 
    id : "L5KpX" , 
    members: [ "g6zbl", "9RXNk", "oEMJv" , "3mx40" , "g4NOp" ],

    links: { 
        Instagram : "https://www.instagram.com/uncomfortablebeats/" , 
        Twitter : "https://twitter.com/Uncomfybeats" , 
        Audius : "https://audius.co/uncomfybeats" , 
        Website: "" 
    }
};

///// ground fault ///// 

collectives[1] = { 
    id : "E2vAQ" , 
    members: [ ],

    links: { 
        Instagram : "https://www.instagram.com/groundfaultinterrupt/", 
        Twitter : "https://twitter.com/groundfaultint", 
        Audius : "https://audius.co/groundfaultint" , 
        Website: "" 
    }
};




var members = [];
var usertracks = [];
var colltracks = [];
var collLinks = [];


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

    collDraw(data[0].data);

   
    
     
}).catch(function (error) {
	
    initRetry(userURL);
}); 

members[collectives[i].id] = collectives[i].members;
collLinks[collectives[i].id] = collectives[i].links;





    
};

};


//// retry the initLoad /////
function initRetry(url1){ 

    Promise.all([
        fetch(url1)
        
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {



        collDraw(data[0].data);
        

    
    }).catch(function (error) {
        // if there's an error, log it
        
        initRetry(url1);    
     
    });

};

function initanalysis(data){ 

    const userinfo = data[0].data;
    const trackinfo = data[1].data ;
    const userid = userinfo.id
    colltracks[userid] = trackinfo;
    
    

};


////// draws collective GRID /////

function collDraw(data){

    

    collcard = document.createElement("div");
    collcard.setAttribute("class", "collCard");
    collcard.setAttribute("id","collCard");
    collcard.addEventListener ('click', function(){
        

        activeCID = data.id;
        fetchArtists(data); ///// FETCHES COLLECTIVES ARTISTS AND  artist TRACKS AND DRAWS THEM 
        fetchTracks(); //// FETCHES COLLECTIVES TRACKS
   
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
    collTracks.setAttribute("id","collTracks");
    collTracks.setAttribute("class","collTracks");
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
    


function fetchTracks () { 
    clickFunction();

const trackURL = 'https://dn2.monophonic.digital/v1/users/' + activeCID + '/tracks?';
    
    Promise.all([

	fetch(trackURL)

]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {

    colltracks = data[0].data;

    for (var i = 0; i < colltracks.length; i++) {
    drawTracks(colltracks[i]);
};




}).catch(function (error) {
	// if there's an error, log it
    fetchTracks();
    
}); 
    

};

function drawLinks () { 

var Insta = collLinks[activeCID].Instagram;
var Twitt = collLinks[activeCID].Twitter
var Audius = collLinks[activeCID].Audius;
var Website = collLinks[activeCID].Website;

var instaexists = 0;
var twittexists = 0;

linkContainer  = document.getElementById("containerLinks");

if (linkContainer.innerHTML == "") {


if (Insta != "") { 

    instaexists = 1;    

    instadiv = document.createElement ("div");
    instadiv.setAttribute("class", "linkDiv");
    instadiv.setAttribute("id", "linkDiv");
    instadiv.addEventListener ('click', function(){
        
        window.open(Insta);

        


    });

    instaPic = document.createElement("img");
    instaPic.setAttribute("class","socialPic");
    instaPic.setAttribute("id","socialPic");
    instaPic.setAttribute("src","/images/icons/IG.png")


    instaLink = document.createElement ('p');
    instaLink.setAttribute("href", Insta);
    instaLink.innerHTML = "INSTAGRAM"

    instadiv.appendChild(instaPic);
    instadiv.appendChild(instaLink);

}

if (Twitt != "") { 

    twittexists = 1;

    twittdiv = document.createElement ("div");
    twittdiv.setAttribute("class", "linkDiv");
    twittdiv.setAttribute("id", "linkDiv");
    twittdiv.addEventListener ('click', function(){
        
        window.open(Twitt);

        


    });

    twittPic = document.createElement("img");
    twittPic.setAttribute("class","socialPic");
    twittPic.setAttribute("id","socialPic");
    twittPic.setAttribute("src","/images/icons/TW.png")

    twittLink = document.createElement ('p');
    twittLink.setAttribute("href", Twitt);
    twittLink.innerHTML = "Twitter";

    twittdiv.appendChild(twittPic);
    twittdiv.appendChild(twittLink);


}



    audiusdiv = document.createElement ("div");
    audiusdiv.setAttribute("class", "linkDiv");
    audiusdiv.setAttribute("id", "linkDiv");
    audiusdiv.addEventListener ('click', function(){
        
        window.open(Audius);

        


    });

    audiusPic = document.createElement("img");
    audiusPic.setAttribute("class","socialPic");
    audiusPic.setAttribute("id","socialPic");
    audiusPic.setAttribute("src","/images/icons/AD.png")

    audiusLink = document.createElement ('p');
    audiusLink.setAttribute("href", Audius);
    audiusLink.innerHTML = "Audius";

    audiusdiv.appendChild(audiusPic);
    audiusdiv.appendChild(audiusLink);



if (instaexists == 1){ 
    linkContainer.appendChild(instadiv);
}

if (twittexists == 1){ 
    linkContainer.appendChild(twittdiv);
}
    

    
    linkContainer.appendChild(audiusdiv);
   


    
} else { 

};

};




function drawTracks (data) {

container = document.getElementById('containerReleases');

    

        trdata = data;

        tr_title = trdata.title;
        tr_art =  trdata.artwork['150x150'];
        tr_likes = trdata.favorite_count; 
        tr_repost = trdata.repost_count;
 
        localuid = trdata.user['id']; 
        localtid = trdata.id

    tr = document.createElement("div");
    tr.setAttribute("class", "trackCard");
    tr.setAttribute("id","trackCard");
    tr.addEventListener ('click', function(){
        
        event.stopPropagation();
        collStream(data);

        


    });

    trArt =document.createElement('img');
    trArt.setAttribute('class','trArt');
    trArt.setAttribute('id','trArt');
    trArt.setAttribute('src',tr_art);


    trContainer = document.createElement('div');
    trContainer.setAttribute('id','trContainer');
    trContainer.setAttribute('class','trContainer');

    

    trtitle = document.createElement("p");    
    trtitle.innerHTML = (tr_title);

    trtrackinfo = document.createElement("table");
    trtrackinfo.setAttribute("class","trackinfotable");
    trtrackinfo.setAttribute("id","trackinfotable");


    trlikes = document.createElement("th");
    trlikes.innerHTML = '<i class="fas fa-heart"></i>' + tr_likes;
    trlikes.style.fontSize = "12px";

    trrepost = document.createElement("th");
    trrepost.innerHTML = '<i class="fas fa-retweet"></i>' + tr_repost;
    trrepost.style.fontSize ="12px";

    trtrackinfo.appendChild(trlikes);
    trtrackinfo.appendChild(trrepost);
    
    trContainer.appendChild(trtitle);
    trContainer.appendChild(trtrackinfo);

    tr.appendChild(trArt);
    tr.appendChild(trContainer);

    



    container.appendChild(tr);


};



function fetchArtists(data){



Hub.innerHTML = "";
drawCollective(data);
   
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
    const trackinfo = data[1].data;
    const userid = userinfo.id
    usertracks[userid] = trackinfo;
    spawnCards(userinfo, trackinfo);

};



////// draws collective at top of HUB ////// 
function drawCollective (data) { 

    artistcount = members[activeCID].length;
    trcount = data.track_count
    

    var navHome = document.createElement('p');
    navHome.innerHTML = " < sublair";
    navHome.setAttribute('id','navHome');
    navHome.setAttribute('class','navHome');
    navHome.setAttribute("onclick","reload()");


    var headerDiv = document.createElement('div');
    headerDiv.setAttribute('class','headerDiv');
    headerDiv.setAttribute('id','headerDiv');

    var nav = document.createElement('table');
    nav.setAttribute('id','nav');
    nav.setAttribute('class','nav');

    var navrow = document.createElement('tr');

    var navArtists= document.createElement('th');
    navArtists.setAttribute('id','navArtists');
    navArtists.setAttribute('class','navArtists');
    navArtists.innerHTML = "Artists";
    navArtists.setAttribute('onclick', 'containerClick("artists")');

    var navTracks = document.createElement('th');
    navTracks.setAttribute('id','navTracks');
    navTracks.setAttribute('class','navTracks');
    navTracks.innerHTML = "Releases";
    navTracks.setAttribute('onclick', 'containerClick("releases")');


    var navLinks = document.createElement('th');
    navLinks.setAttribute('id','navLinks');
    navLinks.setAttribute('class','navLinks');
    navLinks.innerHTML = "Links ";
    navLinks.setAttribute('onclick', 'containerClick("links")');


    navrow.appendChild(navTracks);
    navrow.appendChild(navArtists);
    navrow.appendChild(navLinks);
    nav.appendChild(navrow);

var headerImg = document.createElement('img'); 
headerImg.setAttribute("class","headerImg");
headerImg.setAttribute('id','headerImg');
headerImg.setAttribute('src', data.profile_picture['150x150']);
    

var headerName = document.createElement('p');
headerName.setAttribute("class","headerName")
headerName.setAttribute("id","headerName")
headerName.innerHTML = data.name;

var headerArtists = document.createElement('p');
headerArtists.setAttribute('class','headerArtists');
headerArtists.setAttribute('id','headerArtists');
headerArtists.innerHTML = trcount + ' releases';

var containerArtists = document.createElement('div');
containerArtists.setAttribute('class','containerArtists');
containerArtists.setAttribute('id','containerArtists');

var containerReleases = document.createElement('div');
containerReleases.setAttribute('class','containerReleases');
containerReleases.setAttribute('id','containerReleases');

var containerLinks = document.createElement('div');
containerLinks.setAttribute('class','containerLinks');
containerLinks.setAttribute('id','containerLinks');




headerDiv.appendChild(headerImg);
headerDiv.appendChild(headerName);
headerDiv.appendChild(headerArtists);



Hub.appendChild(navHome); 
Hub.appendChild(headerDiv);
Hub.appendChild(nav); 
Hub.appendChild(containerArtists);
Hub.appendChild(containerLinks);
Hub.appendChild(containerReleases);



};



function containerClick (container) {

    var Artists = document.getElementById('containerArtists');
    var Releases  = document.getElementById('containerReleases');
    var Links  = document.getElementById('containerLinks');

    var nav_Tracks = document.getElementById('navTracks');
    var nav_Artists = document.getElementById('navArtists');
    var nav_Links = document.getElementById('navLinks');
   


    var datasummary = document.getElementById('headerArtists')

    if (container == 'artists'){
        

        datasummary.innerHTML = members[activeCID].length + " Artists";

        Artists.style.display = "block";
        Releases.style.display = "none";
        Links.style.display = "none";
       

        nav_Artists.style.borderTop = "5px solid lime";
        nav_Tracks.style.borderTop = "1px solid lime";
        nav_Links.style.borderTop = "1px solid lime";

       
        
       


    };

    if (container == 'releases'){
       
        Releases.style.display = "block";
        Artists.style.display = "none";
        Links.style.display = "none";

        nav_Artists.style.borderTop = "1px solid lime";
        nav_Tracks.style.borderTop = "5px solid lime";
        nav_Links.style.borderTop = "1px solid lime";

        

        datasummary.innerHTML = colltracks.length + " Releases";


    };

    if (container == 'links'){
       
        Releases.style.display = "none";
        Artists.style.display = "none";
        Links.style.display = "block";



        nav_Artists.style.borderTop = "1px solid lime";
        nav_Tracks.style.borderTop = "1px solid lime";
        nav_Links.style.borderTop = "5px solid lime";

        if (Links.innerHTML == ""){ 
                drawLinks();

        } else { 

        };
 


    };




    




};



////// creates a div and attaches it to the 'artists container'///////

function spawnCards (userinfo, trackinfo){



    const prof = (userinfo.profile_picture['150x150']);   


        handle = "https://www.audius.co/" + userinfo.handle;

    


        var contArtists = document.getElementById('containerArtists')
        

   
    
    
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
    
    contArtists.appendChild(hubCard)
    
    
};

///// shows the HUB on click of collective div on main menu////


function showHUB() { 
    
    Main.style.display = "none";
    UI.style.display = "block";
    Hub.style.display = "block";
    
};

var activeCard = "" ;
var same = "";
    


///// visual detection for open artist cards ////// 
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
    

    
    tr = document.createElement("div");
    tr.setAttribute("class", "trackCard");
    tr.setAttribute("id","trackCard");
    tr.addEventListener ('click', function(){
        
        event.stopPropagation();
        
        
        findTrack(info.user['id'],info.id, false)

    });

    trArt =document.createElement('img');
    trArt.setAttribute('class','trArt');
    trArt.setAttribute('id','trArt');
    trArt.setAttribute('src',info.artwork['150x150']);


    trContainer = document.createElement('div');
    trContainer.setAttribute('id','trContainer');
    trContainer.setAttribute('class','trContainer');

    

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

    trContainer.appendChild(trtitle);
    trContainer.appendChild(trtrackinfo);

    
    tr.appendChild(trArt);
    tr.appendChild(trContainer);
    x.appendChild(tr);
   
};



///// gets streamable URL for track and  calls the stream function ////
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



/// gets streaming url and sends track to the player ////// 

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

 function collStream (data){ 

trackid = data.id;

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

        songTitle.innerHTML = data.title
        songArtist.innerHTML = data.user['name'];

        
        
        
        
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

 


 function reload (){ 
location.reload();
 };












    
    
    
    







        
          
        
        

    
  
    

    
