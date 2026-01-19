import CourseCard from "../components/CourseCard";

const courses = [ 
  { id: 1, title: "React Basics" },
  { id: 2, title: "Advanced JavaScript" },
  { id: 3, title: "Node.js Fundamentals" }, 
  { id: 4, title: "CSS Matery" },
  { id: 5, title: "Data Structures" },
  ];

function Courses({ enrollCourse, enrolledCourses }) {
  return (
    <div>
    <h2>Available Courses</h2>
  {courses.map(course => (
               <CourseCard
               key={course.id}
               course={course}
               enrollCourse={enrollCourse}

  isEnrolled={enrolledCoures.some(c => c.id === course.id)}
  />
  ))}
</div>
);
}

export default Courses;
