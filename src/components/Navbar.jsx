import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Aram Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/8265027/pexels-photo-8265027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Aram </span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
