const Home = () => {
  const playerName = "Zelda";

  // e参数是event，是一个object，包含了所有关于这个event的信息
  const handleClick = (e) => {
    console.log("Hello, ninjas!", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello " + name + "!", e);
  };

  // 第二个onClick的handler，不能直接写成handleClickAgain(playerName)，因为这样会在页面加载时就执行，而不是点击按钮时才执行
  // 所以要创建一个无名函数：() => handleClickAgain(playerName)，这样就会在点击按钮时才执行
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain(playerName, e)}>
        Click Me again
      </button>
    </div>
  );
};

export default Home;
