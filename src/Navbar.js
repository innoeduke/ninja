const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Ninja Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            backgroundColor: "#f1356d",
            color: "white",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </div>
  );
};

export default Navbar;
