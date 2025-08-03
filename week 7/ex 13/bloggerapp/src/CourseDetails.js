import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Basics", duration: "4 weeks" },
    { id: 2, name: "Advanced React", duration: "6 weeks" },
    { id: 3, name: "React with Redux", duration: "5 weeks" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
