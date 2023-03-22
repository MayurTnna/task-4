import React from 'react'
import productDetail from '../productDetail';
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItemToCart} from "../redux/action/action";
import "../assets/scss/main.scss"

function ItemCard() {
    const dispatch = useDispatch()
  return (
     <>
     
     {productDetail && productDetail.map((item) => 
     <div className='itemCard_container'>
     
      <Card
      className="my-3 item_card "
        key={item.id}
      >
        <Card.Body>
          <Card.Title className='float-start' >
            {item.title}
            </Card.Title>
            <div className="price float-end">
              <h6>${item.price}</h6>
            </div>
          
          <Card.Subtitle
            className=" text-muted"
            style={{ paddingTop: "70px", }}
            >
              <div className='float-start'>
            {item.description}
            </div>
          </Card.Subtitle>
          <Button
            className="float-end"
            variant="outline-primary"
            onClick={() => {
              // console.log(item)
              dispatch(addItemToCart(item));
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      </div>
 
   
      )}
  
    </>
  )
}

export default ItemCard