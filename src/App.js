import Navbar from "./Navbar";
function App() {
  const title = "Welcome to the Ninja blog!";
  const numList = [1, 2, 3, 4, 5];

  // Template part of the Component. First design it, and then write scripts up above.
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Give me a random number: {Math.random()}</p>
        <p>Show me a list: {numList}</p>
        <p>
          Add a URL for jump: <a href="http://www.moleqode.com">Moleqode.AI</a>
        </p>
      </div>
    </div>
  );
}

export default App;
