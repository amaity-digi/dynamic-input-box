import "./App.css";
import { useState } from "react";

 function App() {
  const [box, setBox] = useState([
    {
      index: 0,
      value: ""
    }
  ]);

  const handleClick = () => {
    setBox([
      ...box,
      {
        index: box.length,
        value: ""
      }
    ]);
  };

  const handleChange = (e, index) => {
    const insertValue = [...box];
    const updatedIndex = insertValue.findIndex((val) => val.index === index);
    insertValue[updatedIndex]["value"] = e.target.value;
    setBox(insertValue);
  };

  return (
    <div className="App">
      {box.map(({ index }) => (
        <div key={index} style={{ margin: "5px" }}>
          <input
            value={box[index]["value"]}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleClick}>Add New Input</button>
      <div>
        {box.length > 1 &&
          box.map(({ index, value }) => (
            <div key={index}>
              Value {index + 1}: {value}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

