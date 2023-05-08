import { useState } from "react";
import {
  CaretRightOutlined,
  BorderOutlined,
  ThunderboltOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  RetweetOutlined,
} from "@ant-design/icons";
import "./App.css";
import {
  StartCursorMovement,
  StopCursorMovement,
} from "../wailsjs/go/main/App";
import { Layout, Button, theme, Typography, Divider } from "antd";
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
        <Header
          style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
        >
          <Title
            level={2}
            style={{
              float: "left",
              width: 220,
              height: 31,
              margin: "16px 24px 16px 0",
              color: "#fff",
            }}
          >
            <RetweetOutlined />
            Move Cursor
          </Title>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div
            style={{
              padding: 24,
              height: "calc(100vh - 64px - 70px)",
              background: colorBgContainer,
            }}
          >
            <Button type="primary" onClick={start}>
              <CaretRightOutlined />
              Start
            </Button>
            <Button danger ghost onClick={stop}>
              <BorderOutlined />
              Stop
            </Button>
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
