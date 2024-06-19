const fs = require('fs');

function info(message){

    var date = new Date(Date.now()).toLocaleTimeString();

    var msg = `\n ${date} INFO : ${message}`;

    fs.appendFile('sample.log', msg, (err)=>{
        if (err) {
            console.log(err);
            return
        }
    })
}

function debug(message){

    var date = new Date(Date.now()).toLocaleTimeString();

    var msg = `\n ${date} DEBUG : ${message}`;

    fs.appendFile('sample.log', msg, (err)=>{
        if (err) {
            console.log(err);
            return
        }
    })
}


module.exports.info = info;
module.exports.debug = debug;
