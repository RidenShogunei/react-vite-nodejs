import { useState } from "react";
import axios from "axios";
import { Avatar, Card, Button, Input, message } from "antd";
import style from "./chatgpt.module.css";
import PropTypes from "prop-types";
const Person = (props) => {
  return (
    <div className={style.list}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar size="large">{props.person}</Avatar>
        <span className={style.word}>{props.person}</span>
      </div>
      <div className={style.word}>{props.message}</div>
    </div>
  );
};
Person.propTypes = {
  person: PropTypes.string,
  message: PropTypes.string,
};
const Chatgpt = () => {
  const [messageApi] = message.useMessage();
  const [data, setData] = useState([]);
  const [msg, setmsg] = useState("");
  const talk = () => {
    console.log("About to show loading message.");
    messageApi.loading('正在回答...', 0);
    console.log("Loading message should be displayed.");
    setData((previousData) => [
      ...previousData,
      { msg:msg, person: "user" },
    ]);
    setmsg("");
    axios
      .get("https://api.walsm.cn/api/gpt3.5", {
        params: {
          msg:msg,
        },
      })
      .then((response) => {
        console.log("success", response);
        // 关闭加载信息
        messageApi.success('Action complete', 2);
  
        setData((previousData) => [
          ...previousData,
          { msg: response, person: "chatgpt" },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // 报错时关闭加载信息
        messageApi.error('Error fetching data', 2);
      });
  };
  // render the data
  return (
    <div>
      <Card className={style.search}>
        <div className={style.show}>
          {data.map((msg, index) => {
            return <Person key={index} person={msg.person} message={msg.msg} />;
          })}
        </div>
        <div className={style.talk}>
          <Input
            className={style.myInput}
            placeholder="请输入内容"
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                talk();
              }
            }}
          />
          <Button
            type="primary"
            onClick={talk}
          >
            发送
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Chatgpt;