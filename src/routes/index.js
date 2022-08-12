const express = require("express");
const userRouter = require("./v1/userRouter");
const rootRouter = express.Router();

rootRouter.use("/user/v1", userRouter);

module.exports = rootRouter;
