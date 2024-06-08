// const {myName,greeting,username} = require("./service/fullname.js");
// const {log, debug, info, errorLogger} = require("./service/logger.js");


// console.log(myName("Nilana", "Hansaja"));
// greeting("Nilana","Hansaja");

// console.log("USer Name : "+username);

// log("12121");
// debug("21212");
// info("Hello");
// errorLogger("salsjals");



const http = require('http');
const productHandler = require('./controller/ProductController');

const server = http.createServer((req, res)=>{

    const {method, url} = req;


    // @PostMapping("/product/add")
    if(method == "POST" && url == "/product/add"){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        req.on('end', ()=>{
            body = Buffer.concat(body).toString();
            productHandler(res,body);
        })
    }

    if(method == "GET" && url == "/product/get"){
        res.statusCode = 200;
        res.setHeader('content-type','application/json');

        let responseData = {
            status:200,
            message:"Successfully fetched GET request"
        }

        res.write(JSON.stringify(responseData));
        res.end();
    }
});

server.listen(3000,(err)=>{
    if(err){
        return console.error(err);
    }

    console.log("Application Start on Port 3000");
})



