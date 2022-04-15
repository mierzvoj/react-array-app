import ReactDOM from "react-dom";
import "./App.css";
const arr = [];
const numbers = [];
const App = () => {
  const getRandom = () => Math.floor(Math.random() * 20) + 1;

  for (let i = 0; i < 10; i++) {
    arr.push(getRandom());
  }

  console.log(arr);
  const listItems = arr.map((numbers) => <li>{numbers}</li>);
  return <ul>{listItems}</ul>;
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App numbers={numbers} />);
