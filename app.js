const express = require("express")
const app = express()
const routes = require("./routes/rickRoutes")
const cors = require("cors")
const PORT = 4000

app.use(cors())
app.use("/characters", routes)

app.listen(PORT, () => console.log(`el servidor está escuchando en el puerto http://loacalhost:${PORT}`))
//ejemplo http://localhost:3000/characters/name/morty