const express =require("express");
const apiFindRouter = require("../router/apiFindRouter");
const { apiFindService } = require("../services/apiFindService");

const app = express();

app.get("/", (req,res) => {
    res.status(200).json({ message: "Service is up"})
});

app.use("/", apiFindRouter);

app.use((req, res, next) => {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        },
    });
});

module.exports = app;