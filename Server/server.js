const express = require('express'); // creating an express server which requires express dependency 
const app = express();
const mysql = require('mysql'); // requiring mysql dependency
const cors = require('cors');
const bodyParser = require('body-parser')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'NstalgiaProducts'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3001,()=> { // check to see if localhost:3001 is running
    console.log('running on port 3001');
})
db.connect(err => {
    if(err) {
        console.log(err)
    }
    else {console.log('Connected!! :)')}
})

// req = request, res = response that will be sent to frontend 
app.get('/Products', (req, res)=> {
     
    db.query('SELECT * FROM Products', (error, result) => {
        if (error) {
           return error
    
      
        }
         else {
            res.send(result)
         }
    })
})