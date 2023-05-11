import { UserOutlined } from "@ant-design/icons";
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
import icon from "../../../assets/images/move-cursor-icon-v1.1.png";

const { Header } = Layout;

const { Title, Text } = Typography;

export function Menu() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "#1f1746",
      }}
    >
      <Space size={8} align="start" style={{ float: "left" }}>
        <Image width={50} height={50} src={icon} preview={false} />
        <Title
          level={2}
          style={{
            width: 220,
            height: 31,
            lineHeight: "31px",
            margin: "16px 24px 16px 0",
            color: "#fff",
            textAlign: "start",
          }}
        >
          GlideOn
        </Title>
      </Space>
      {/* <Space size={8} align="center" style={{ float: "right" }}>
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{ background: "#5e17d4" }}
        />
      </Space> */}
    </Header>
  );
}
