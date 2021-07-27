import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá nlw");
})

app.post("/test-post", (request, response) => {
    return response.send("Olá nlw método post");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running nlw"));