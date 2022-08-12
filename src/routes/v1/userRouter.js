const express = require("express");
const {
  likeResController,
  rateController,
  orderController,
} = require("../../controllers");
const userRouter = express.Router();

userRouter.post("/likeRestaurant", likeResController.likeRestaurant);
userRouter.post("/unlikeRestaurant", likeResController.unlikeRestaurant);
userRouter.get("/listLikeUser/:id", likeResController.listLikeUser);
userRouter.get("/listLikeRestaurant/:id", likeResController.listLikeRestaurant);

userRouter.post("/createRateRestaurant", rateController.createRate);
userRouter.get("/listRateUser/:id", rateController.listRateUser);
userRouter.get("/listRateRestaurant/:id", rateController.listRateRestaurant);

userRouter.post("/createOrder", orderController.createOrder);

module.exports = userRouter;
