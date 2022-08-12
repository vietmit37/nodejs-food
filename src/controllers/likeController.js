const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, errCode, failCode } = require("../utils/respone");

// Like restaurant
const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const data = await model.like_res.create({
      user_id,
      res_id,
    });
    successCode(res, data);
  } catch {
    failCode(res);
  }
};
// Unlike restaurant
const unlikeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const data = await model.like_res.destroy({
      where: {
        user_id,
        res_id,
      },
    });
    successCode(res, data);
  } catch {
    failCode(res);
  }
};
// list Like of user
const listLikeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.like_res.findAll({
      where: {
        user_id: id,
      },
    });
    if (data) {
      successCode(res, data);
    } else {
      errCode(res, "Not found");
    }
  } catch {
    failCode(res);
  }
};
// list like of restaurant
const listLikeRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await model.like_res.findAll({
      where: {
        res_id: id,
      },
    });
    if (data) {
      successCode(res, data);
    } else {
      errCode(res, "Not found");
    }
  } catch {
    failCode(res);
  }
};
module.exports = {
  likeRestaurant,
  unlikeRestaurant,
  listLikeUser,
  listLikeRestaurant,
};
