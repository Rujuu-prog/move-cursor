import "./App.css";
import {
  StartCursorMovement,
  StopCursorMovement,
} from "../wailsjs/go/main/App";
import { useState, useEffect } from "react";
//antd
import {
  CaretRightOutlined,
  BorderOutlined,
  ThunderboltOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Button,
  theme,
  Typography,
  Divider,
  Image,
  Space,
  Avatar,
} from "antd";
// img
import icon from "./assets/images/move-cursor-icon-v1.1.png";
// module
import { Menu } from "./components/layout/header/Menu";

const { Header, Content, Footer } = Layout;

const { Title, Text } = Typography;

function App() {
  const [status, setStatus] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function start() {
    StartCursorMovement();
    setStatus(true);
  }

  function stop() {
    StopCursorMovement();
    setStatus(false);
  }

  return (
    <div id="app">
      <Layout className="layout">
        <Menu />
        <Content style={{ padding: "0 50px" }}>
          <div
            style={{
              padding: 24,
              height: "calc(100vh - 64px - 70px)",
              background: colorBgContainer,
            }}
          >
            <Space size={4} align="center">
              <Button
                type="primary"
                onClick={start}
                style={{ backgroundColor: "#22d0a7" }}
              >
                <CaretRightOutlined />
                Start
              </Button>
              <Button
                danger
                ghost
                onClick={stop}
                style={{ borderColor: "#e52236" }}
              >
                <BorderOutlined />
                Stop
              </Button>
            </Space>
            <Divider plain>
              <ThunderboltOutlined />
              Status
            </Divider>
            <Text>
              {status ? (
                <>
                  <CheckCircleTwoTone twoToneColor="#2f67eb" />
                  <Text> Running</Text>
                </>
              ) : (
                <>
                  <CloseCircleTwoTone twoToneColor="#eb2f96" />
                  <Text> Stopped</Text>
                </>
              )}
            </Text>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2023 Rujuu-prog</Footer>
      </Layout>
    </div>
  );
}

export default App;
