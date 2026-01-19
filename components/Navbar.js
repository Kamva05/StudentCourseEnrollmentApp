import { Link } from "react-router-dom";

function Navbar({ total }) {
  return (
    <nav style={{ display: "flex", 
                gap: "20px", 
                padding: "10px" }}>
<Link tp="/">Home</Link>
<Link to "/courses">Courses</Link>
<Link to="/enrolled">Enrolled ({total})</Link>
  </nav>
);
}

export default Navbar;
