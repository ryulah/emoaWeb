const express = require("express");
const app = express();
const port = 5001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
//const resources = require("../resources/images");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//application/json타입으로 된 것을 분석해서 가져올 수 있게 하는 설정

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/server/user", userRouter);
app.use("/resources", express.static("resources"));

app.get("/", (req, res) => {
  console.log("Hello World!", req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
