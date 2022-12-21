const pgp = require('pg-promise')(/* initialization options */);

const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'myDatabase',
    user: 'myUser',
    password: 'myPassword'
};

// alternative:
// var cn = 'postgres://username:password@host:port/database';

const db = pgp(cn); // database instance;

// select and return a single user name from id:
db.one('SELECT name FROM users WHERE id = $1', [123])
    .then(user => {
        console.log(user.name); // print user name;
    })
    .catch(error => {
        console.log(error); // print the error;
    });
