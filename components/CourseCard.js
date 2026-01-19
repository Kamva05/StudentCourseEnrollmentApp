function CourseCard({ course, enrollCourse, isEnrolled }) {
  return (
    <div style={{ border: "1px solid #ccc",
                  margin: "10px",
                  padding: "10px" }}>
<h3>{course.title}</h3>
<button onClick={() =>
enrollCourse(course)} 
disabled={isEnrolled}>

{isEnrolled ? "Enrolled" : "Enroll"}
</button>
  </div>
);
}

export default CourseCard;
