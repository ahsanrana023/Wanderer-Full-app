import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function Logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  const navAction = () => {
    if (user) {
      return (
        <ul className="navbar-nav mr-5">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user mr-2"></i>
              {user.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
              <Link className="dropdown-item" to="/guides">
                Guides
              </Link>
              <Link className="dropdown-item" to="/tour">
                Tours
              </Link>
              <Link className="dropdown-item" to="/hotel">
                Hotels
              </Link>
              <Link className="dropdown-item" to="/product">
                Travel Essentials
              </Link>

              <Link className="dropdown-item" to="#" onClick={Logout}>
                Logout
              </Link>
            </div>
          </div>
        </ul>
      );
    }

    return (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/tour">
            Tours
          </Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to="/hotel">
            Hotels
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/guides">
            Guides
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/product">
            Travel Essentials
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontStyle: "italic",
            fontFamily: "georgia",
            marginLeft: "10px",
            fontSize: "26px",
          }}
        >
          <span style={{ color: "#0688b7", fontWeight: "bold" }}>W</span>
          anderer.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navAction()}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
