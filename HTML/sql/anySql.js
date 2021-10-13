var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');
// var db = new sqlite3.Database('tmp.sqlite3');

// https://support.glitch.com/t/hiding-sqlite-database-from-open-project/4536
var db = new sqlite3.Database('.data/tmp.sqlite3');

// db.serialize(function () {
//   db.run(`DROP TABLE any;`);
// });

// db.serialize(function () {
//   db.run(`CREATE TABLE IF NOT EXISTS any (
// txt TEXT NOT NULL,
// service TEXT NOT NULL,
// created_at DATETIME DEFAULT (datetime('now', 'localtime'))
// );`);
// });

// db.close();




// https://github.com/mapbox/node-sqlite3#usage
db.serialize(function () {
    // var stmt = db.prepare("INSERT INTO any (txt, service) VALUES ('bar','grouppicker')").run();
    // stmt.finalize();

    db.each("SELECT * FROM any", function (err, row) {
        console.log(row);
    });
});
db.close();