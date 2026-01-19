import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from ".?pages/Courses";
import EnrolledCourses from "./pages/EnrolledCourses";

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState ([]);

  const enrollCourse= (course) => {
    if (!enrolledCourses.find(c => c.id === course.id)) {

      setEnrolledCourses([...enrolledCourses,curse});
    }
  };

  const removeCourse = (id) => {

    setEnrolledCourses(enrolledCourses.filter(c => c.id !== id));

    return (
      <>
      <Navbar
    total={enrolledCourses.length} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route
path="/courses"
element={
  <enrolledCourses={enrolledCourses}

removeCourse={removeCourse} 
          />
  }
/>
  </Routes>
  </>
);
}


export default App;
