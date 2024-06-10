const db = require('../db_config/DatabaseCon');

function getAllBooks(callback){
    db.query("SELECT * FROM book", (err, resultSet, props)=>{
        if(err) throw err;

        callback(resultSet);
    })
}


module.exports.allBooks = getAllBooks;