import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import '../styles/book_card.css';

export default function BookCard(props){
    const handleClick = () => {
        props.select(props.book);
    }
    return (
        <Col className="py-3 px-4">
        <Card className="shadow clickeableCard" onClick={handleClick} style={{transition:"transform 0.3s ease"}}>
            <Card.Img className="p-3" variant="top" src={props.book.image} style={{borderRadius:"20px"}}/>
            <Card.Body>
              <Card.Title>{props.book.name}</Card.Title>
              <Card.Footer>ISBN: {props.book.isbn}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}