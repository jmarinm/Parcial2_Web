import { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import UserContext from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import CONFIG from "../config";
import BookCard from "./book_card";
import BookDetail from "./book_detail";

export default function BookList() {
  const { user } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const URL = CONFIG.API_URL + "books";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleBookChange = (book) => {
    const URL = CONFIG.API_URL + "books/" + book.id;
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setSelectedBook(data);
      });
  };

  const logged = () => {
    if (!user) {
      return <Navigate to="/login" replace={true} />;
    }
  };
  return (
    <div>
      <Navbar style={{backgroundColor:"rgb(148, 191, 167)"}} variant="dark">
          <Navbar.Brand className="mx-4">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/008/508/384/original/stack-of-books-isolated-on-white-background-png.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tu Libreria Aliada
          </Navbar.Brand>
          <Nav.Link href="/login">Login</Nav.Link>
        
      </Navbar>
      <Container style={{ minWidth: "100%" }}>
        {logged()}
        <Row style={{ minHeight: "100vh" }}>
          <Col sm={8}>
            <Row xs={1} md={3} className="g-4">
              {books.map((book) => (
                <BookCard book={book} key={book.id} select={handleBookChange} />
              ))}
            </Row>
          </Col>
          <Col sm={4}>
            <BookDetail book={selectedBook} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
