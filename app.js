const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res)=>{
    res.sendFile(__dirname+ '/views/products.html');
}
);

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
  }); 