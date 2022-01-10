import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Table(props) {
  console.log(props.results);
  return (
    <div className="tb_containter">
      <div className="tb_title">
        <h2>{props.title}</h2>
      </div>
      <table
        style={{
          width: "1000px",

          border: "1px",
          borderColor: "gray"
        }}
      >
        <tr style={{ border: "1px", borderColor: "gray" }}>
          <th>No.</th>
          <th>제목</th>
          <th>@user</th>
          <th>Date</th>
          <th>공개여부</th>
        </tr>
        {props.results &&
          props.results.map(item => {
            return (
              <tr>
                <td>#{item.seq}</td>
                <td>
                  <Link to={`/postView/${item.seq}`}>{item.title}</Link>
                </td>
                <td>{item.userEmail}</td>
                <td>{item.mkDt}</td>
                <td>{item.password != "" ? "(비공개)****" : "전체공개"}</td>
              </tr>
            );
          })}
      </table>
      <div className="tb_search">
        <input type="text" placeholder="검색할 내용을 입력해주세요" />
        <button>검색하기</button>
      </div>
    </div>
  );
}

export default Table;
