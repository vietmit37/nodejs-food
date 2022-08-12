const express = require("express");
const app = express();
const cors = require("cors");
const rootRouter = require("./routes");
app.use(express.json());
app.use(cors());
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use("/api", rootRouter);
