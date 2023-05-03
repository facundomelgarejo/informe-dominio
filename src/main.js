const express = require('express')
const app = express();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-769817034207300-091918-5da9bb1d117ccfeb9e4b08dfe1cca9f4-356555477",
});


//routes

app.get('/checkout', (req, res) =>{
    res.send('<h1> hola desde checkout.. </h1>')
});

//server
app.listen(4000, () => {
    console.log('server open port 4000')
});