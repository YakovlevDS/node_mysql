const mysql = require('mysql');

// Connection config
const conn = mysql.createConnection({
    host: "localhost",
    user: "mysql",
    database: "world",
    password: "mysql"
});


// Connection call

conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// Query

let query = "SELECT * FROM `city`";

conn.query(query, (err, result, field) => {
  console.log(err);
  console.log(result);
  // console.log(field);
});

// Connection Close
conn.end( err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Database ----- Close');
    }
});