const {allBooks} = require('../repository/LibraryRepository')



function getAllBooks(callback){
    allBooks((result)=>{
        callback(result);
    });
}


module.exports.allBooks = getAllBooks;



