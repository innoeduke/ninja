import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  // Template part of the Component. First design it, and then write scripts up above.
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
