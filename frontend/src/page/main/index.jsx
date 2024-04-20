import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import style from "./main.module.css";
import Chatgpt from "../chatgpt/index";
import Picture from "../picture";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [choose, setChoose] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let content;
  if (choose === "1") {
    content = <Chatgpt />;
  } else {
    content = <Picture />;
  }
  return (
    <Layout className={style.main}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.title}>六系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={(key) => {
            setChoose(key.key);
            console.log("change", choose);
          }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "在线翻译",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "自动识图",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {content}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
