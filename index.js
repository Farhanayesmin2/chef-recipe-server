const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
// Get the data
const chef = require('./data/chef.json');
const recipes = require('./data/recipes.json');


// Set running data or not
app.get('/', (req, res) => {
    res.send('api running in port 5000')
})

// Send data of chef
app.get('/chef', (req, res) => {
    res.send(chef)
});

// // Get Specific id from Categories.
// app.get('/recipes/:id', (req, res) => {
//     const id = req.params.id;
    
//         const chefRecipes = recipes.filter(n => n.category_id === id);
//         res.send(chefRecipes);
    
// });
//All Specific chef
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedchef = recipes.filter(n => n.category_id === id);
    res.send(selectedchef)
});


app.listen(port, () => {
    
console.log('The port is runing on:',port);

})