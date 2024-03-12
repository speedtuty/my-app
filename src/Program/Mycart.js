import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Mycart = () => {
  const data = JSON.parse(localStorage.getItem("cart"));

  const deleteCart = (index) => {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var indexToRemove = index;
    cart.splice(indexToRemove, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="container">
      <h2 className="my-product-h2">My Cart</h2>
      <div className="my-products">
        {data &&
          data.map((item, index) => (
            <Card className="card" style={{ height: "340px" }}>
              <Card.Img variant="top" src={item.image} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="card-price">₹ {item.price}</Card.Text>
                <Button variant="primary" onClick={() => deleteCart(index)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Mycart;
