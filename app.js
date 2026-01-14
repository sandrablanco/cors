const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT =3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola');
});
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});