import { useState ,useEffect} from "react";
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
  const talk = async () => {
    console.log("About to show loading message.");
    setData((previousData) => [
      ...previousData,
      { msg:msg, person: "user" },
    ]);
    setmsg("");
    try {
      const response = await axios
        .get("https://api.oick.cn/api/fanyi", {
          params: {
            text:msg,
          },
        });
      console.log("success",  response.data.data.result);
      messageApi.success('Action complete', 2);
      setData((previousData) => [
        ...previousData,
        { msg: response.data.data.result, person: "chatgpt" },
      ]);
    } catch(error) {
      console.error("Error fetching data: ", error);
      messageApi.error('Error fetching data', 2);
    }
  };

  // 在useEffect中显示加载状态，而且这个effect仅在talk被调用时运行
  useEffect(() => {
    messageApi.loading('正在回答...', 0);
  }, [talk]);

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