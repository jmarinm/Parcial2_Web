import { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(validPassword);
    setValidated(true);
  };
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
                Encuentra hasta el libro que no estabas buscando
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
              <p style={{ minWidth: "100%" }}> Tu Libreria Aliada</p>
            </Row>
            <Row xs={8} className="px-4">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User name or email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingrese un correo valido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    
                    type="password"
                    placeholder="Password"
                    isInvalid={validPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    La contraseña debe tener minimo 6 caracteres
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
