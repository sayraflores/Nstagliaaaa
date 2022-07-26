require('dotenv').config()
const express = require('express'); // creating an express server which requires express dependency 
const app = express();
const mysql = require('mysql'); // requiring mysql dependency
const cors = require('cors');
const bodyParser = require('body-parser')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'NstalgiaProductss'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

// app.listen(3001,()=> { // check to see if localhost:3001 is running
//     console.log('running on port 3001');
// })
db.connect(err => {
    if(err) {
        console.log(err)
    }
    else {console.log('Connected!! :)')}
})

// req = request, res = response that will be sent to frontend 
app.get('/Shop', (req, res)=> {
    db.query('SELECT * FROM Products', (error, result) => {
        if (error) {
           return error
    
      
        }
         else {
            res.send(result)
            console.log(result)
         }
    })
    
})
app.listen(3001,()=> { // check to see if localhost:3001 is running
    console.log('running on port 3001');
})