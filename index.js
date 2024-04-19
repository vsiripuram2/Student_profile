const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/studentrecord',(req,res)=> {
    connection.query('SELECT * FROM student_details',(err,rows)=> {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get('/studentrecord/:student_ID',(req,res)=> {
    connection.query(`SELECT * FROM student_details WHERE student_ID =? `,[req.params.student_ID],(err,rows)=> {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})

app.delete('/studentrecord/:student_ID',(req,res)=> {
    connection.query('SELECT * FROM student_details WHERE student_ID=?',[req.params.student_ID],(err,rows)=> {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})

app.post('/studentrecord',(req,res)=> {
    var stu = req.body;
    var studata = [stu.student_ID,stu.student_name,stu.student_class]
    connection.query('INSERT INTO student_details(student_ID,student_name,student_class)  values(?)',[studata],(err,rows)=> {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})

app.patch('/studentrecord',(req,res)=> {
    var stu = req.body;
   
    connection.query('UPDATE  student_details SET WHERE student_ID='+stu.student_ID,[stu],(err,rows)=> {
        if(err) {
            console.log(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    })
})


app.listen(3000, ()=>{
    console.log('Express is running port 3000');
})