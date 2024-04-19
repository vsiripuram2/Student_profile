const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'student_info'
})

 mysqlConnection.connect((err)=> {
    if(err) {
        console.log('Err in DB connection' + JSON.stringify(err,undefined,2));
    } else {
        console.log('DB connected successfully');
    }
})

module.exports = mysqlConnection
