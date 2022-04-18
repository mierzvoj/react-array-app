import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const arr = [];
arr.length = 10;
const numbers = [];
const App = () => {
  const getRandom = () => Math.floor(Math.random() * 10);

  for (let k = 0; k < 10; k++) {
    arr.push(getRandom());
  }

  console.log(arr);
  const listItems = arr.map((numbers, i) => (
    <li key={`numbers -${i}`}> {numbers}</li>
  ));

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <ul>
      {listItems}
      <button onClick={refreshPage}> Refresh me </button>
    </ul>
  );
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App numbers={numbers} />);
