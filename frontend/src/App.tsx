import "./App.css";
import { Button, Col, Input, Layout, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh", display: "flex" }}>
        <Layout style={{ width: "300px", maxWidth: "300px", margin: "auto" }}>
          <Header style={{ background: "#f5f5f5" }}>
            <Row>
              <Col span={24}>Вход</Col>
            </Row>
          </Header>
          <Content style={{ backgroundColor: "#fff" }}>
            <Row style={{ marginTop: "24px" }}>
              {/* <Col span={24}><Input size="large" placeholder="Логин" prefix={} /></Col> */}
            </Row>
            <Row style={{ margin: "24px 0" }}>
              <Col span={24}>Пароль</Col>
            </Row>
          </Content>
          <Footer style={{ backgroundColor: "#f5f5f5" }}>
            <Row>
              <Col span={12}>
                <Button type="primary">Вход</Button>
              </Col>
              <Col span={12}>
                <Button>Забыл пароль</Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "16px" }}>
              <Col span={24}>
                <Button type="link">Link Button</Button>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    </div>
  );
}

export default App;
