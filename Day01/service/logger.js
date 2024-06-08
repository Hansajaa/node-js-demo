const log = (value)=>{
    console.log("LOG : "+value);
}

const debug = (value)=>{
    console.log("DEBUG : "+value);
}

const info = (value)=>{
    console.log("INFO :"+value);
}

const errorLogger = (value)=>{
    console.log("ERROR : "+value);
}


module.exports = {
    log,
    debug,
    info,
    errorLogger
}
