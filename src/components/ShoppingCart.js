import React from "react";
import productDetail from "../productDetail";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addItemToCart, removeItemFromCart } from "../redux/action/action";

function ShoppingCart() {
  const items = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // console.log(items)

  return (
    <>
      <div className="card_container bg-dark">
        {items && items.map((item) => {
          return(
        <Card
          style={{ width: "28rem", height: "10rem", margin: "auto" }}
          className="my-3 bg-black text-light"
          key={item.id}
        >
          <Card.Body>
            <Card.Title>
              <h3 className="float-start">{item.title}</h3>
              <div className="price float-end">
                <h4>
                  ${item.price * item.total} <span className="text-info">(${item.price}/item)</span>
                </h4>
              </div>
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ paddingTop: "50px" }}
            >
              <div className="text-danger">
                {item.description}
              </div>
              
            </Card.Subtitle>
            <span className="mx-2 float-start"> x{item.total} </span>
            <Button
              className="float-end"
              onClick={() => {
                dispatch(addItemToCart(item));
              }}
              variant="outline-light"
            >
              +
            </Button>

            <Button
              className="float-end"
              onClick={() => {
                dispatch(removeItemFromCart(item));
              }}
              variant="outline-light"
            >
              -
            </Button>
          </Card.Body>
        </Card>
    );
    })}
      </div>
    </>
  );
}


export default ShoppingCart;
