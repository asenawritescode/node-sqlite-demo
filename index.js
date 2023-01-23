// Import
const sqlite3  = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database('./db/demo.db', (err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the demo database.');
});

// Create a table
const createtable = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    number TEXT NOT NULL,
    hasPendingOrder BOOLEAN,
    location TEXT,
    mpesaNumber TEXT
    );`

db.run(createtable, (err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Created table users');
});

// Insert a row into the table
const insert = `INSERT INTO users (number, hasPendingOrder, location, mpesaNumber) VALUES (?,?,?,?)`

db.run(insert, ['+254712345678', 0, 'Nairobi', '254712345678'], (err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Inserted a row into the table');
});

// close the database connection
db.close((err)=>{
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});