route.get("/:name", async (req, res) => {
  const queryname = req.query.nombre
  console.log(queryname)
  const name = req.params.name
  const data = await fetchCharacters(name) 
  res.json(data)
})

module.exports = route
----utils/fetchCharacters.js
const axios = require("axios")
const baseURL = "https://rickandmortyapi.com/api/character"

async function fetchCharacters(name = null) {
  try {
    const url = name ? `${baseURL}/?name=${name}` : baseURL
    const response = await axios.get(url)
    const data = response.data.results
    return data
  } catch (error) {
    console.error("Error:", error)
    return {error: "NO se ha encontrado los personajes"}
  }
}

module.exports = fetchCharacters
