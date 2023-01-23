// Import
const sqlite3  = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('./db/demo.db', (err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the demo database.');
});


// close the database connection
db.close((err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});