const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://karamomari20010:H8diuUOF7R8lmg9b@cluster0.bho3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("conntion successfyle")
    }).catch((err) => {
        console.log("error in conntion with database " + err)
    })


const Articel = require("./models/Articel")


//create articel

app.get("/", async (req, res) => {
    const articel = await Articel.find()
    res.render("index.ejs", { articel: articel })

})

app.post("/articel", async (req, res) => {

    const newArticel = new Articel()
    newArticel.title = req.body.title
    newArticel.body = req.body.body
    newArticel.numberOfLike = req.body.numberOfLike
    await newArticel
        .save()
        .then((savedArticle) => {
            res.status(201).json({
                message: "Article successfully stored",
                article: savedArticle,
            });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
})


app.get('/articels', async (req, res) => {

    const articel = await Articel.find()
    res.status(201).json({ articels: articel })

})


app.get('/articels/:id', async (req, res) => {
    const { id } = req.params

    const articel = await Articel.findById(id)
    if (!articel) res.status(400).json({ error: "not faind" })
    res.status(201).json({ articel: articel })

})


app.delete('/articels/:id', async (req, res) => {
    const { id } = req.params

    const articel = await Articel.findByIdAndDelete(id)
    if (!articel) res.status(400).json({ error: "not faind" })
    res.status(201).json({ articel: articel })

})

const port = 3000;
app.listen(port, () => {
    console.log(`i am listen any req in port ${port}`);
})
