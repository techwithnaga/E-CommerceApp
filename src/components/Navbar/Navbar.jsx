import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/public/img/en.png" alt="flag" />
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Children
            </Link>
          </div>
          <div className="item">
            <Link to="/products/4" className="link">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            NAGASTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/products/4" className="link">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link to="/products/4" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/products/4" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/products/4" className="link">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon></SearchIcon>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            <FavoriteBorderIcon></FavoriteBorderIcon>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
