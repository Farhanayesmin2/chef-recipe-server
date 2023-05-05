const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
// Get the data
const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');


// Set running data or not
app.get('/', (req, res) => {
    res.send('api running in port 5000')
})

// Send data of all chef
app.get('/chef', (req, res) => {
    res.send(chef)
});

//All Specific chef
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedchef = recipes.filter(n => n.category_id === id);
    res.send(selectedchef)
});

// this is the main port for run data
app.listen(port, () => {
    
console.log('The port is runing on:',port);

})