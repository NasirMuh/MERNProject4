
import express from 'express'
const app = express()
import path from 'path';

const port = process.env.PORT || 2005



app.get('/Student', (req, res) => {
    res.send('Hello World Nasir it is working veryGood for me!')
})
app.get('/yes', (req, res) => {
    res.send('Yes route is working veryGood for me!')
})
app.get('/students', (req, res) => {
    res.send('Yes Students data available here!')
})
const __dirname = path.resolve()
// app.use("/", express.static(path.join(__dirname, "./snake-gun-water-game/.next/server/pages/")))
// app.use("*", express.static(path.join(__dirname, "./snake-gun-water-game/.next/server/pages/")))

 app.use("/", express.static(path.join(__dirname, "./client/build")))
app.use("*", express.static(path.join(__dirname, "./client/build")))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})