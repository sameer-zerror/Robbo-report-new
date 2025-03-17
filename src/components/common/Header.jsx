import { menus } from "@/helpers/MenuData";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="nav">
      <div className="nav-content">
        <h1 className="brand">Robb Report</h1>
        <div className="links nav-items">
          {menus.map((item, index) => {
            return (
              <Link href="">
                <div key={index}>{item.name}</div>
              </Link>
            );
          })}
        </div>
        <i className="material-icons menu">menu</i>
        <div className="login">
          <span>Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
