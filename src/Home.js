import { useState } from "react";

const Home = () => {
  const [age, setAge] = useState(100);
  const [index, setIndex] = useState(0);
  const [playerName, setPlayerName] = useState("Link");

  const handleClick = (e) => {
    setPlayerName(["Zelda", "Link"][index]);
    setIndex(1 - index);
    setAge(age - 1);
    // BUG: 这里会输出 Index: 0 => Hello Link! 这是不对的.
    console.log("Index: " + index + " => Hello " + playerName + "!", e);
  };

  // 这个版本的react，不用hook也可以保存state了；但如果用了，就只能都用。
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
