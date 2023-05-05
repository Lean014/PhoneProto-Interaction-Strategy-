function makeConnection(onReceive) {
    console.log("trying to connect!");
    OOCSI.connect("wss://oocsi.id.tue.nl/ws","phoneprotoguide"); 
    OOCSI.subscribe("LPtest", onReceive);
}

function makeConnectionIndu(onReceive) {
    let userName = sessionStorage.getItem("userKey"); // no const for when is null give a name
    userName ??= nameGenerator(); //?? means null. is no user name go to namd genarator and give name. 

    console.log("trying to connect!");
    console.log(userName);

    OOCSI.connect("wss://oocsi.id.tue.nl/ws",userName); 
    OOCSI.subscribe("LPtest", onReceive);
}

function nameGenerator() {
    const randomNumb = Math.random()*1000; //bteween 0 and 0 so times 1000. let is variable. const is constant
    const randomNumbRound = Math.floor(randomNumb); //make it a round number. 
    const userName = "indu"+randomNumbRound;
    console.log(userName);// print in JS concole
    sessionStorage.setItem("userKey", userName); //put user name in special location to keep the value after the function ends. so the user name can be used on other pages.
    return userName;
}
