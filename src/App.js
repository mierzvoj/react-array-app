import "./App.css";

const arr = [];
const App = () => {
  const getRandom = () => Math.floor(Math.random() * 20) + 1;

  for (let i = 0; i < 10; i++) {
    arr.push(getRandom());
  }

  console.log(arr);
};
export default App;

function displayLi({ props }) {
  return (
    <ul>
      {props.arr.map((rand, i) => (
        <li key="{i}">{rand}</li>
      ))}
    </ul>
  );
}

// createRoot.render(<displayLi props={arr} />, document.getElementById("root"));
