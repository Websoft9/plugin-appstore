import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

function App() {
  const [iframeSrc, setIframeSrc] = useState(null);   // 定义一个状态变量，保存iframe的src
  const [kopiaHomePage, setKopiaHomePage] = useState(null);   // 定义一个状态变量，保存kopiaHomePage
  const [encoded, setEncoded] = useState(null);   // 定义一个状态变量，保存kopiaHomePage

  async function getData() {
    const configRes = await fetch("./config.json");
    const config = await configRes.json();
    const { KOPIA_USERNAME, KOPIA_PASSWORD, KOPIA_HOME_PAGE } = config;
    setKopiaHomePage(KOPIA_HOME_PAGE);

    const encoded = btoa(KOPIA_USERNAME + ":" + KOPIA_PASSWORD); // 对用户名和密码进行base64编码
    setEncoded(encoded);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {kopiaHomePage ? (
        <div className="myBackup" key="container">
          <iframe title="backup" src={`${kopiaHomePage}?id=${encoded}`} />
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center m-5">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
    </>
  );
}

export default App;
