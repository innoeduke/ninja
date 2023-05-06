import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleDelete(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  // use .then() to wait for the command to finish
  useEffect(() => {
    // setTimeout(() => {
    fetch("http://localhost:6001/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
    // }, 3000);
  }, []);

  // check blogs is not null and then render the BlogList component
  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
