import { useContext, useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import CONFIG from "../config";
import UserContext from "../contexts/UserContext";

export default function BookDetail(props) {
  const available = () => {
    if (props.book.available_online) return "Si";
    else return "No";
  };
  const { user } = useContext(UserContext);
  
    const summary = () => {
      if (user.rol == "Administrador"){
        return (
          <InputGroup >
                <Form.Control
                as="textarea"
                  value={props.book.summary}
                />
              </InputGroup>
        )
      } else {
        return (
          <Card.Text>{props.book.summary}</Card.Text>
        )
      }
    }

  if (props.book) return FilledCard();
  else return <Card className="mt-3" style={{ minHeight: "80vh" }}></Card>;

  function FilledCard() {
    return (
      <Card className="mt-3" style={{ minHeight: "80vh" }}>
        <Card.Body>
          <Card.Title>{props.book.name}</Card.Title>
          <hr></hr>
          <Container>
            {cardInfo()}
            <Row
              className="mt-3"
              style={{
                textAlign: "start",
              }}
            >
              <Card.Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Resumen:{" "}
              </Card.Text>
              {summary()}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }

  function cardInfo() {
    if (user.rol == "Administrador") {
      return (
        <Row style={{ textAlign: "start" }}>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              ISBN
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control
                  value={props.book.isbn}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Autor
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={props.book.author} />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Publicador
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={props.book.publisher} />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Genero
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={props.book.gender} />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Año
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={props.book.year} />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Disponible en linea
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={available()} />
              </InputGroup>
            </Col>
          </Row>
          <Row
            className="mb-2"
            style={{ alignItems: "center", display: "flex" }}
          >
            <Col sm={4} style={{ fontWeight: "bold" }}>
              Precio
            </Col>
            <Col sm={8}>
              <InputGroup>
                <Form.Control value={props.book.price} />
              </InputGroup>
            </Col>
          </Row>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col
            style={{
              textAlign: "start",
              fontWeight: "bold",
              //fontSize: "1.5rem",
            }}
          >
            <Card.Text>ISBN</Card.Text>
            <Card.Text>Autor</Card.Text>
            <Card.Text>Publicador</Card.Text>
            <Card.Text>Genero</Card.Text>
            <Card.Text>Año</Card.Text>
            <Card.Text>Disponible en linea</Card.Text>
            <Card.Text>Precio</Card.Text>
          </Col>
          <Col style={{ textAlign: "start" }}>
            <Card.Text>{props.book.isbn}</Card.Text>
            <Card.Text>{props.book.author}</Card.Text>
            <Card.Text>{props.book.publisher}</Card.Text>
            <Card.Text>{props.book.gender}</Card.Text>
            <Card.Text>{props.book.year}</Card.Text>
            <Card.Text>{available()}</Card.Text>
            <Card.Text>{props.book.price}</Card.Text>
          </Col>
        </Row>
      );
    }
  }
}
{
  /* <Col
                style={{
                  textAlign: "start",
                  fontWeight: "bold",
                  //fontSize: "1.5rem",
                }}
              >
                <Card.Text>ISBN</Card.Text>
                <Card.Text>Autor</Card.Text>
                <Card.Text>Publicador</Card.Text>
                <Card.Text>Genero</Card.Text>
                <Card.Text>Año</Card.Text>
                <Card.Text>Disponible en linea</Card.Text>
                <Card.Text>Precio</Card.Text>
              </Col>
              <Col style={{ textAlign: "start" }}>
                <InputGroup>
                  <Form.Control
                    value={props.book.isbn}
                  />
                </InputGroup>
                <InputGroup>
                  <Form.Control
                    value={props.book.author}
                  />
                </InputGroup>
                <Card.Text>{props.book.publisher}</Card.Text>
                <Card.Text>{props.book.gender}</Card.Text>
                <Card.Text>{props.book.year}</Card.Text>
                <Card.Text>{available()}</Card.Text>
                <Card.Text>{props.book.price}</Card.Text>
              </Col> */
}
