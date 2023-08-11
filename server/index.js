import express from "express";
import cors from 'cors'
import generate from "./generate.js";

const app = express()

app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Hello from my API")
})

app.post("/generate", async (req, res) => {
    const ingredients = req.body.ingredients
    try {
        const recipes = await (generate(ingredients))
        res.json({ response: recipes})
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})