import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogger App</h1>

      {/* Conditional Rendering using && */}
      {showBooks && <BookDetails />}

      {/* Conditional Rendering using Ternary */}
      {showBlogs ? <BlogDetails /> : <h2>No Blogs Available</h2>}

      {/* Conditional Rendering using Element Variable */}
      {showCourses ? <CourseDetails /> : null}
    </div>
  );
}

export default App;
