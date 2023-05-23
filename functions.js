function makeConnection(onReceive) {
    console.log("trying to connect!");
    OOCSI.connect("wss://oocsi.id.tue.nl/ws","phoneprotoguide"); 
    OOCSI.subscribe(nameOfChannel , onReceive);
}

function makeConnectionIndu(onReceive) {
    let userName = sessionStorage.getItem("userKey"); // no const for when is null give a name
    userName ??= nameGenerator(); //?? means null. is no user name go to namd genarator and give name. !!! comment this line out at demoDay

    console.log("trying to connect!");
    console.log(userName);

    function callBackPlus (message) { //links for indu phone. adds our own linking code to the callback. when indu phon is  behind or to fast.
        catchUpLink(message);
        onReceive(message);
    }

    OOCSI.connect("wss://oocsi.id.tue.nl/ws", userName); 
    OOCSI.subscribe(nameOfChannel, callBackPlus);
}

function nameGenerator() { //timestamp date.now
    let time = Date.now();
    const randomNumb = Math.random()*10000; //beteween 0 and 1 so times 10000. let is variable. const is constant
    const randomNumbRound = Math.floor(randomNumb); //make it a round number. 
    const userName = "indu"+randomNumbRound+" time: "+time; //timestamp to make it super unique
    console.log(userName);// print in JS concole
    sessionStorage.setItem("userKey", userName); //put user name in special location to keep the value after the function ends. so the user name can be used on other pages.
    return userName;
}

function catchUpLink(message) {
    if (message.data.link != undefined) { //does it exist?
        window.location.href = message.data.link; // goto link named in indu phone
    }
}