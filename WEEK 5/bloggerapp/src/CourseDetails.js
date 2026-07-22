import React from "react";

function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "React",
      duration: "2 Months",
    },
    {
      id: 2,
      name: "Angular",
      duration: "3 Months",
    },
    {
      id: 3,
      name: "Node.js",
      duration: "2.5 Months",
    },
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <b>{course.name}</b> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;