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
  return (
    <div>
      <h3>upload your Emoticon bundle!</h3>
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
        <label>(*)이모티콘 bundle 명칭 : </label>
        <input
          type="text"
          name="bundleTag"
          value={bundle}
          onChange={bundleHandler}
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
