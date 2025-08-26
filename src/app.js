import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Elastic Beanstalk 🚀");
});

export default app;
