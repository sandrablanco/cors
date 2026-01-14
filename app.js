const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT =3000;

app.use(cors());
//todos los personajes
app.get('/characters', async (req, res) => {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los personajes' });
  }
});

//personaje por nombre
app.get('/characters/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(404).json({
      error: `Personaje "${name}" no encontrado`
    });
  }
});
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});
//ejemplo http://localhost:3000/characters/name/morty