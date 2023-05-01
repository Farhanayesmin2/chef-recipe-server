const express = require('express');
const app = express();
const cors = requre('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.get('/', (req, res) => {
    
    res.send('Hello , the port is running on 5000.');


});


app.listen(port, () => {
    
console.log('The port is runing on:',port);

})