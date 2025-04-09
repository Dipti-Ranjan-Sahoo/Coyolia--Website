import React from "react";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogPage;
