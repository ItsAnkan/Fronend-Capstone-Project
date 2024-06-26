import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/Logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate("/");
  };

  return (
    <header className="topbar">
      <div className="logo">
        <img src={Logo} alt="logo" height={50} onClick={onClickImage} />
      </div>
      <Navbar isMenuOpen={isMenuOpen}/>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Header;