const express = require("express");
const app = express();
const { getAiResponse } = require("./gemini");

app.use(express.json());

app.post("/", async (req, res) => {
    const resultFromGemini = await getAiResponse(req.body.prompt);
    res.send(resultFromGemini);
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
