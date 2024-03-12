const ProductsFun = ({data}) => {
    console.log(data)
  return (
    <div className="myapp">
      <h1> Products List</h1>

      {data && data.map((item) => (
        <div className="app">
          {" "}
          {item.name}:{item.price}
        </div>
      ))}
    </div>
  );
};
export default ProductsFun;
