import React from 'react'
import productDetail from "../productDetail"
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItemToCart, removeItemFromCart } from '../redux/action/action';




function ShoppingCart() {
  const items = useSelector((state) => state.total.Body);
  const dispatch = useDispatch();



  return (
    <>
    <div className='card_container'> 
        {items &&
          items.map((item) => {
            return (
              <Card
                style={{ width: "28rem", height: "9rem", margin: "auto" }}
                className="my-3"
                key={item.id}
              >
                <Card.Body>
                  <Card.Title>
                    {item.title}
                    <div className="price">
                      <h4>${item.price * item.total}</h4>
                    </div>
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ paddingTop: "10px" }}
                  >
                    {item.description}
                  </Card.Subtitle>
                  <Button
                    onClick={() => {
                      dispatch(addItemToCart(item));
                    }}
                  >
                    +
                  </Button>
                  <span className="mx-2"> x {item.total}</span>
                  <Button
                    onClick={() => {
                      dispatch(removeItemFromCart(item));
                    }}
                  >
                    -
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  )
}

export default ShoppingCart