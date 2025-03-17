import { menus } from "@/helpers/MenuData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/images/logo/Robb_Report_white_1.png";

const Header = () => {
  return (
    <header className="nav">
      <div className="nav-content">
        <Link href="/" className="brand">
          <Image src={logo} width={1000} height={1000} alt="" />
        </Link>
        <div className="links nav-items">
          {menus.map((item, index) => {
            return (
              <Link href={item?.link || "#"}>
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
