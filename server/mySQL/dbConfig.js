var mysql = require("mysql");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var dbConfig = {
  host: "localhost",
  user: "root",
  port: 3304,
  password: "aa1202",
  database: ""
};

var pool = mysql.createPool(dbConfig);

pool.getConnection(function(err, connection) {
  if (err) {
    console.error("mysql connection error :" + err);
  } else {
    console.info("mysql is connected successfully.");
    connection.release();
    pool.end();
  }
});
