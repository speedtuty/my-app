import { useState, useEffect } from "react";
import posts from "../API/Post";
import PostCode from "./PostCode";


const Blog = () => {
  const [data, setData] = useState([]);
useEffect(() => {setData(posts)},[]);



  return <PostCode posts={data} />;
};
export default Blog;
