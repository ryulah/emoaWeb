const router = require("express").Router();
const express = require("express");
const multer = require("multer");
var fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(cookieParser());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

var mysql = require("mysql");
var config = require("../mySQL/dbConfig");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3304,
  password: "aa1202",
  database: "myapp"
});

//connection.connect();

router.post("/login", (req, res) => {
  console.log("/server/user/login", req.body);
  var queryStr =
    "select count(*) as count from aduser where user_id=? and user_pwd=?";
  var queryValues = [req.body.email, req.body.password];
  connection.query(queryStr, queryValues, function(err, results) {
    console.log(results);
    if (err) {
      console.log("/login" + err);
      return res.status(500).send({ success: false, msg: "server error" });
    } else {
      var result = results[0].count;
      console.log("parsed result", result);
      if (result > 0) {
        return res.status(200).send({
          success: true,
          msg: "login successed! nice to meet you again!"
        });
      } else {
        return res.status(200).send({
          success: false,
          msg: "failed to login. \n Please check your infomation again."
        });
      }
    }
  });
});

router.post("/register", (req, res) => {
  console.log("/server/register");
  var queryStr =
    "insert into aduser (user_id, user_name, user_pwd) values (?,?,?)";
  var queryValues = [req.body.email, req.body.name, req.body.password];
  connection.query(queryStr, queryValues, function(err) {
    if (err) {
      console.log("/register" + err);
      return res.status(500).send({ success: false, msg: "falied to sign in" });
    } else {
      return res.status(200).send({ success: true, msg: "success to sign in" });
    }
  });
});

router.post("/duplicationCheck", (req, res) => {
  var queryStr = "select count(*) from aduser where user_id=?";
  console.log("duplicationCheck");
  console.log(req.body.email);
  var queryValues = [req.body.email];
  connection.query(queryStr, queryValues, function(err, results) {
    if (err) {
      console.log(err);
      return res.status(500).send({ success: false, msg: "failed" });
    } else {
      console.log(results);
      if (results.RowDataPacket !== null) {
        console.log("alreay exist");
        return res.status(200).send({ success: false, msg: "failed to use" });
      } else return res.status(200).send({ success: true, msg: "available" });
    }
  });
});

// 파일 경로 및 이름 설정 옵션
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./resources/images"); // 파일 업로드 경로
  },
  filename: function(req, file, cb) {
    var extension = path.basename(file.originalname).split(".")[1];
    console.log(req.cookies.email);
    console.log(req.body.bundleTag);
    cb(
      null,
      req.cookies.email +
        "&" +
        req.body.bundleTag +
        "&" +
        file.fieldname +
        "&" +
        Date.now() +
        "." +
        extension
    ); //파일 이름 설정
  }
});

const upload = multer({ storage: storage });
router.post("/multipart/upload", upload.array("attachments"), (req, res) => {
  console.log("multipart/upload");

  var queryStr =
    "insert into item_master (user_id, originalFile,savedFile,bundleTag) values (?,?,?,?)";
  var queryValues2 = [
    req.cookies.email,
    req.files[0].filename,
    req.body.bundleTag
  ];
  for (var i = 0; i < req.files.length; i++) {
    console.log(req.files[i].originalname);
    var queryValues = [
      req.cookies.email,
      req.files[i].originalname,
      req.files[i].filename,
      req.body.bundleTag
    ];

    connection.query(queryStr, queryValues, err => {
      if (err) {
        console.log("file info saved err", err);
        res.json({ ok: false, data: "file info saved err" });
      }
    });
  }
  connection.query(
    "insert into item_header (user_id,thumbnail,bundleTag) values (?,?,?)",
    queryValues2,
    err => {
      if (err) {
        console.log(err);
        res.json({ ok: false, data: "file info saved err" });
      } else {
        res.redirect("/");
      }
    }
  );
  //res.json({ ok: true, data: "Multipart Upload Ok" });
  //클라이언트에 응답 전송
  //   res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
  //   res.write("<h3>파일 업로드 성공</h3>");
  //   res.write("<hr/>");
  //   res.write(
  //     "<p>원본 파일 이름 : " +
  //       req.files.originalname +
  //       "-> 저장 파일명 " +
  //       req.files.filename +
  //       "</p>"
  //   );
  //   res.write("<p>MIME TYPE : " + req.files.mimetype + "</p>");
  //   res.write("<p>파일 크기 : " + req.files.size + "</p>");
  //res.end();
});

router.get("/getUserIcons", (req, res) => {
  console.log("getUserIcons", req.query.user_id);
  console.log("getUserIcons", req.query.mode);
  var queryStr = "select * from item_master where deleteYN='N' and user_id=?";
  var queryValues = [req.query.user_id];
  var resultsArray = [];
  var bundleList = [];
  if (req.query.mode == 1) {
    console.log("mode 1");
    connection.query(
      "select * from item_header where deleteYN='N'",
      (err, results) => {
        if (err) {
          console.log("/getUserIcon mode 1 err " + err);
        } else {
          console.log("item_header", results);
          return res.status(200).send({
            success: true,
            result: results.map((cur, index, results) => {
              return results[index];
            })
          });
        }
      }
    );
  } else {
    console.log("mode 2");
    connection.query(queryStr, queryValues, (err, results) => {
      if (err) {
        console.log("/getUserIcon err " + err);
        return res
          .status(500)
          .send({ success: false, msg: "/getUserIcon err " + err });
      } else {
        console.log(results);
        resultsArray = results.map((cur, index, results) => {
          return results[index].savedFile;
        });
        return res.status(200).send({
          success: true,
          msg: "success to fetch user icons",
          result: resultsArray
        });
      }
    });
  }
});

module.exports = router;
