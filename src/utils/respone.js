const successCode = (res, data) => {
  let dSend = {
    message: "Thanh cong",
    data,
  };
  res.status(200).send(dSend);
};

const errCode = (res, data) => {
  let dSend = {
    message: "That bai",
    data,
  };
  res.status(400).send(dSend);
};

const failCode = (res) => {
  let dSend = {
    message: "Loi",
  };
  res.status(500).send(dSend);
};
module.exports = {
  successCode,
  errCode,
  failCode,
};
