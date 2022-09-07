const express = require("express");
const apiFindRouter = express.Router();
const { apiFindService, apiFindServiceById } = require("../services/apiFindService");

apiFindRouter.get("/", (req, res, next) => {
    apiFindService().then(result => {
        res.status(200).json(result.data);
    })
    .catch(error => {
        res.status(500).json({
            error:{
                message: error.message,
            },
        });
    });
});

apiFindRouter.get("/:id", (req, res, next) => {
    apiFindServiceById(req.params.id).then(result => {
        res.status(200).json(result.data);
    })
    .catch(error => {
        res.status(500).json({
            error:{
                message: error.message,
            },
        });
    });
});

module.exports = apiFindRouter;