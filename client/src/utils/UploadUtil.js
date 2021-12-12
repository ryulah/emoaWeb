import React, { useState, useEffect } from "react";
import { Upload, Button } from "antd";

import {
  SmileOutlined,
  SmileTwoTone,
  FolderOpenOutlined,
  HeartTwoTone,
  CheckCircleTwoTone
} from "@ant-design/icons";
import axios from "axios";
export default function UploadUtil(props) {
  var flag = false;
  const [fileList, setFileList] = useState(false);
  const [bundle, setBundle] = useState("");
  const [bundelDetail, setBundleDetail] = useState("");
  const [disabled, setDisabled] = useState("disabled");
  const authEmail = props.authInfo._authEmail;
  const CheckFiles = () => {
    if (bundle !== null && flag) {
      setDisabled("");
    } else {
      flag = false;
      setDisabled("disabled");
    }
  };
  const bundleHandler = e => {
    setBundle(e.currentTarget.value);
    CheckFiles();
  };
  const submitHandler = e => {
    flag = true;
    CheckFiles();
  };
  const bundelDetailHandler = e => {
    setBundleDetail(e.currentTarget.value);
    CheckFiles();
  };
  return (
    <div>
      <h3>당신의 요구사항을 발주해보세요!</h3>
      <p>
        <SmileTwoTone />
        <HeartTwoTone />
        <CheckCircleTwoTone />
      </p>
      <form
        action="/server/user/multipart/upload"
        enctype="multipart/form-data"
        method="post"
      >
        <label> (*) 발주 bundle 명칭 : </label>
        <input
          type="text"
          name="bundleTag"
          value={bundle}
          onChange={bundleHandler}
        />
        <br />
        <br />
        <label> (*) 발주 요구사항(상세) : </label>
        <input
          type="textarea"
          name="bundleDetail"
          value={bundelDetail}
          onChange={bundelDetailHandler}
        />
        <br />
        <br />
        <input
          id="files"
          type="file"
          name="attachments"
          onChange={submitHandler}
          multiple
        ></input>
        <br />
        <br />
        <button
          id="submitBtn"
          type="submit"
          class="btn btn-primary"
          disabled={disabled}
        >
          UPLOAD !
        </button>
      </form>
    </div>
  );
}
