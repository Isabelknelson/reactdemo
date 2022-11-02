import Counter from "./components/Counter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Isabel Nelson - g61n753
      </h2>

      <hr />
      <MyCounter incBy={1}/><hr />
      <MyCounter incBy={2}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;