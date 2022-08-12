const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const { successCode, errCode, failCode } = require("../utils/respone");

//create order
const createOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    const data = await model.order.create({
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    });
    successCode(res, data);
  } catch {
    failCode(res);
  }
};
module.exports = {
  createOrder,
};
