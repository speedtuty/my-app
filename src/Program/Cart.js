import { useState } from "react";
import products from "../Data/Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addedCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  return (
    <div className="container">
      <h2 className="my-product-h2">
        My Products
        <span>
          <Link to="/mycart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
          </Link>
        </span>
      </h2>
      <div className="my-products">
        {products.map((item) => (
          <Card className="card">
            <Card.Img variant="top" src={item.image} className="card-img" />
            <Card.Body>
              <Card.Title className="card-title">{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text className="card-price">₹ {item.price}</Card.Text>
              <Button variant="primary" onClick={() => addedCart(item)}>
                AddToCart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
