import { useState } from "react";

const Home = () => {
  const [index, setIndex] = useState(0);
  // let index = 0;
  let playerName = ["Zelda", "Link"][index];

  const handleClick = (e) => {
    // when index is set, the component will be re-rendered and the playerName will be updated
    setIndex(1 - index);
    // index = 1 - index;
    console.log("Index: " + index + " => Hello " + playerName + "!", e);
  };

  const age = 100;

  return (
    <div className="home">
      <h2>Homepage</h2>
      <br />
      <p>
        {playerName} is {age} years old.
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
