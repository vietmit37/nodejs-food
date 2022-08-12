const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, errCode, failCode } = require("../utils/respone");

// create rate
const createRate = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const data = await model.rate_res.create({
      user_id,
      res_id,
      amount,
    });
    successCode(res, data);
  } catch {
    failCode(res);
  }
};
// list rate of user
const listRateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.rate_res.findByPk(id);
    if (user) {
      const data = await model.user.findAll({
        include: ["res_id_restaurant_rate_res"],
        where: {
          user_id: id,
        },
      });

      successCode(res, data);
    } else {
      errCode(res, "Not found");
    }
  } catch {
    failCode(res);
  }
};
// list rate of restaurant
const listRateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await model.rate_res.findByPk(id);
    if (restaurant) {
      const data = await model.restaurant.findAll({
        include: ["user_id_user_rate_res"],
        where: {
          res_id: id,
        },
      });
      successCode(res, data);
    } else {
      errCode(res, "Not found");
    }
  } catch {
    failCode(res);
  }
};
module.exports = {
  createRate,
  listRateUser,
  listRateRestaurant,
};
