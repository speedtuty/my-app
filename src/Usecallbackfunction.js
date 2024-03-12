import { useCallback } from "react";
import { useState } from "react";
import Datacomponent from "./Datacomponent";

const Usecallbackfunction = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const addData = useCallback(() => {
    setData([...data, "new data"]);
  }, [data]);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Datacomponent data={data} addData={addData} />
      <p> {count} </p>
      <button onClick={increment} style={{ backgroundColor: "none !important" }}>
        Increment
      </button>
    </>
  );
};
export default Usecallbackfunction;
