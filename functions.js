function makeConnection(onReceive) {
    console.log("trying to connect!");
    OOCSI.connect("wss://oocsi.id.tue.nl/ws","phoneprotoguide"); 
    OOCSI.subscribe("LPtest", onReceive);
}

function makeConnectionIndu(onReceive) {
    console.log("trying to connect!");
    OOCSI.connect("wss://oocsi.id.tue.nl/ws","phoneprotoindu"); 
    OOCSI.subscribe("LPtest", onReceive);
}


