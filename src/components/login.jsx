import { useContext, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import CONFIG from "../config";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const { user, handleLogin, handleLogout } = useContext(UserContext);
  const intl = useIntl();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false || password.length < 6) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      let data = {
        email: email,
        password: password,
      };
      fetch(CONFIG.API_URL + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode) {
            console.log(data);
          } else {
            handleLogin(data);
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
    setValidated(true);
  };

  handleLogout();
  return (
    <div
      style={{
        backgroundColor: "gray",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Container
        className="shadow"
        style={{
          minHeight: "80vh",
          maxWidth: "60%",
          backgroundColor: "rgb(148, 191, 167)",
        }}
      >
        <Row>
          <Col style={{ minHeight: "80vh" }}>
            <Row xs={8} style={{ height: "70%" }}>
              <Image
                className="p-4"
                src="https://static.vecteezy.com/system/resources/previews/008/508/384/original/stack-of-books-isolated-on-white-background-png.png"
                style={{ maxHeight: "100%" }}
              />
            </Row>
            <Row
              xs={4}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "30%",
              }}
            >
              <p
                style={{
                  minWidth: "100%",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                }}
              >
                <FormattedMessage id="motto" />
              </p>
            </Row>
          </Col>
          <Col style={{ backgroundColor: "white" }}>
            <Row
              xs={4}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "30%",
                fontSize: "2rem",
                fontWeight: "bolder",
              }}
            >
              <p style={{ minWidth: "100%" }}>Tu Libreria Aliada</p>
            </Row>
            <Row xs={8} className="px-4">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    <FormattedMessage id="email-label" />
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder={intl.formatMessage({
                      id: "email-placeholder",
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FormattedMessage id="email-feedback" />
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    <FormattedMessage id="password-label" />
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder={intl.formatMessage({
                      id: "password-placeholder",
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={password.length > 0 && password.length < 6}
                  />
                  <Form.Control.Feedback type="invalid">
                    <FormattedMessage id="password-feedback" />
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
