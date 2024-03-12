const Datacomponent = ({ data, addData }) => {
  return (
    <>
      <h1> My Data</h1>
  
        <p> {data} </p>;

      <button onClick={addData} style={{ background: "none" }}>
        Add Data
      </button>
    </>
  );
};
export default Datacomponent;
