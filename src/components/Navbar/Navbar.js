import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-a">
        <div className="logo">
          <i class="fas fa-book-reader"></i>
        </div>
        <div className="search">
          <div>
            <i class="fas fa-search"></i>
          </div>
          <div>
            <input
              className="search-input"
              placeholder="Buscar en Caradelibro"
            />
          </div>
        </div>
      </div>
      <div className="navbar-b">
        <div class="navbar-b-icon">
          <i class="fas fa-house-user"></i>
        </div>
        <div class="navbar-b-icon">
          <i class="fas fa-tv"></i>
        </div>
        <div class="navbar-b-icon">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="navbar-b-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="navbar-b-icon">
          <i class="fas fa-gamepad"></i>
        </div>
      </div>
      <div className="navbar-c">
        <div className="navbar-c_a">
          <div className="navbar-c_avatar">
            <i class="fas fa-universal-access"></i>
          </div>
          <div className="navbar-c_name">Nombre</div>
        </div>
        <div className="navbar-c_b">
          <div class="navbar-c-icon">
            <i class="fas fa-plus"></i>
          </div>
          <div class="navbar-c-icon">
            <i class="far fa-comments"></i>
          </div>
          <div class="navbar-c-icon">
            <i class="far fa-bell"></i>
          </div>
          <div class="navbar-c-icon">
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
