function EnrolledCourses({ enrolledCourses, removeCourse }) {
  return (
    <div>
    <h2>Enrolled Courses</h2>

  {enrolledCourses.length === 0 ? (
    <p>No courses enrolled yet</p>
   ) : (
     enrolledCourses.map(course => (
       <div key={course.id}>
       <span>{course.title}</span>
        <button onClick={() => removeCourse(course.id)}>Remove</button>
                         </div>
                         ))
   )}
  </div>
  );
}

export default EnrolledCourses;
