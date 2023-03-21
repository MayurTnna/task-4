import React from 'react'
import productDetail from '../productDetail';
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItemToCart} from "../redux/action/action";

function ItemCard() {
    const dispatch = useDispatch()
  return (
     <>
     <div>
     {productDetail && productDetail.map((item) => 
      <Card
        style={{ width: "28rem", height: "9rem", margin: "auto" }}
        className="my-3"
        key={item.id}
      >
        <Card.Body>
          <Card.Title className="title">
            {item.title}
            <div className="price">
              <h6>${item.price}</h6>
            </div>
          </Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ paddingTop: "10px" }}
          >
            {item.description}
          </Card.Subtitle>
          <Button
            className="float-end"
            onClick={() => {
              dispatch(addItemToCart(item));
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      )}
    </div>
    </>
  )
}

export default ItemCard