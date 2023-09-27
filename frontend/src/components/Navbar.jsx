import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div>
        <nav className="nav-items">
          <NavLink to="/" className="home-nav">
            Home
          </NavLink>
          {
              location.pathname === "/" ? (
                <NavLink to="/createStudent">
                  <button className="add-usr">Add New Student</button>
                </NavLink>
              ):<NavLink onClick={() => navigate(-1)}>
                  <button className="add-usr">Back</button>
                </NavLink>
          }
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
