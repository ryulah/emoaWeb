import React, { useState, useEffect } from "react";
import QNATable from "../../../utils/Table";
import axios from "axios";

function Helpdesk() {
  const [title, setTitle] = useState("고객센터");
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios.get("/server/contents/get/board").then(res => {
      if (res.data.success) {
        console.log("success", res.data.result);
        setResults(res.data.result);
      } else {
        console.log(res.data.msg);
      }
    });
  }, []);
  return (
    <div className="QNA">
      <div className="reqQna">
        <a href="/requestQnA">문의작성(+)</a>
      </div>

      <QNATable title={title} results={results} />
    </div>
  );
}

export default Helpdesk;
