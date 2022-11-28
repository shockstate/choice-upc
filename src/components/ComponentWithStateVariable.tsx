import { useEffect, useState } from "react";

const ComponentWithStateVariable = () => {
  const [textToShow, setTextToShow] = useState<string>("Initial value");

  const changeText = () => {
    setTextToShow("Changed text!");
  }

  useEffect(() => {
    console.log("The value is " + textToShow)
  }, [textToShow]);

  return (
    <>
      <div>
        {textToShow}
      </div>
      <button onClick={changeText}>Click me</button>
    </>
  );
};

export default ComponentWithStateVariable;
