import React from "react";

function BlogItem({ title, author }) {
  return (
    <li>
      <strong>{title}</strong> by {author}
    </li>
  );
}

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Understanding JSX", author: "Sophie Alpert" },
    { id: 2, title: "React Fiber Architecture", author: "Andrew Clark" },
    { id: 3, title: "React Suspense Deep Dive", author: "Sebastian Markbåge" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} author={blog.author} />
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
