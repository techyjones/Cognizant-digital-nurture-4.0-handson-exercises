import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("books");
  const [showCourses, setShowCourses] = useState(true);

  // Using element variables
  let selectedComponent;
  if (view === "books") {
    selectedComponent = <BookDetails />;
  } else if (view === "blogs") {
    selectedComponent = <BlogDetails />;
  } else {
    selectedComponent = <CourseDetails />;
  }

  // Using ternary operator
  const conditionalCourse = showCourses ? <CourseDetails /> : <p>Courses are hidden</p>;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Blogger App</h1>
      
      {/* Buttons to toggle views */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("books")}>Show Books</button>
        <button onClick={() => setView("blogs")} style={{ marginLeft: "10px" }}>Show Blogs</button>
        <button onClick={() => setView("courses")} style={{ marginLeft: "10px" }}>Show Courses</button>
      </div>

      {/* Conditional Rendering with if/else (element variable) */}
      {selectedComponent}

      <hr />

      {/* Conditional Rendering with ternary operator */}
      <button onClick={() => setShowCourses(!showCourses)} style={{ marginBottom: "10px" }}>
        Toggle Courses Section
      </button>
      {conditionalCourse}

      <hr />

      {/* Conditional Rendering using && operator */}
      {view === "books" && <p>Currently viewing books section (Rendered using &&)</p>}
    </div>
  );
}

export default App;
