const express = require('express');
const app = express();
const cors = requre('cors');
const port = process.env.PORT || 5000;

app.use(cors());
// Get the data
const chef = require('./data/chef.json');


// Set running data or not
app.get('/', (req, res) => {
    res.send('api running in port 5000')
})

// Send data of chef
app.get('/chef', (req, res) => {
    res.send(chef)
});


app.listen(port, () => {
    
console.log('The port is runing on:',port);

})