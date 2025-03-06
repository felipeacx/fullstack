const express = require("express")
const router = require("./routes/router.js")
const cors = require("cors")

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

app.use("/api/", router)

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`)
})
