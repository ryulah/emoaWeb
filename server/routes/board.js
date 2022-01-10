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
var connection = require("../mySQL/dbConfig");

router.post("/upload/board", (req, res) => {
  console.log(req.body);
  var queryValues = [
    req.body.userEmail,
    req.body.mkDt,
    req.body.category,
    req.body.title,
    req.body.contents,
    req.body.password
  ];
  var query =
    "insert into board (userEmail,mkDt,category,title,contents,password) values (?,?,?,?,?,?)";
  connection.query(query, queryValues, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ success: false, msg: err });
    } else {
      return res.status(200).send({ success: true, msg: results });
    }
  });
});

router.get("/get/board", (req, res) => {
  var query = "select * from board";

  if (req.body != null) {
    query = "select * from board where seq=?";
    var queryValeus = req.body.seq;
    connection.query(query, queryValeus, (err, results) => {
      if (err) {
        return res.stauts(500).send({ success: false, msg: err });
      } else {
        return res.status(200).send({ success: true, result: results });
      }
    });
  } else {
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        return res.stauts(500).send({ success: false, msg: err });
      } else {
        console.log(results);
        return res.status(200).send({ success: true, result: results });
      }
    });
  }
});

module.exports = router;
