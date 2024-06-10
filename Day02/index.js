const http = require('http');
const {allBooks} = require('./src/service/LibraryService')

const server = http.createServer((request, response)=>{
    const {method, url} = request;

    if(method == "GET" && url == "/books"){
        
        allBooks((res)=>{
            response.statusCode = 200;
            response.setHeader('content-type','application/json');
            let books = {
                status: 200,
                message: "All Books Of Library",
                data: res
            }

            response.write(JSON.stringify(books));
            response.end();
        })

        
        
    }

});

server.listen(3000,(err)=>{

    if (err) throw err;

    console.log("Server Started on Port 3000");
})