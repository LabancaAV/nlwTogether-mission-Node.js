import "reflect-metadata";
import express from "express";

const app = express();

import "./database"

// http://localhost:3000
app.listen(3000, () => console.log("Server is running nlw"));