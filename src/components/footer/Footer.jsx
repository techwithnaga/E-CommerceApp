import React from "react";
import footer from "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="top">
          <div className="item">
            <h3>Categories</h3>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h3>Links</h3>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h3>About</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aliquam dignissimos amet odit, eum cum numquam mollitia soluta
              voluptatem recusandae a repellendus! Ducimus magni vero saepe fuga
              magnam sunt neque!
            </span>
          </div>
          <div className="item">
            <h3>Contact</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aliquam dignissimos amet odit, eum cum numquam mollitia soluta
              voluptatem recusandae a repellendus! Ducimus magni vero saepe fuga
              magnam sunt neque!
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">NAGASTORE</span>
            <span className="copyright">
              &copy Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
