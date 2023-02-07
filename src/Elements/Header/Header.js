import React from 'react';
import './Header.css';
import '../Fonts/Montserrat/style.css'
import Logo from "../Images/Logo.svg"
import Search from "../Images/Search.svg"



function Header() {
  return (
    <div className="Header">
      <div className="Header_main">
        <div className="Header_left">
          <div className="Logo">
            <img src={Logo} alt=""/> 
          </div>
          <div className="Name">
            <div className="Mango_read">MangoRead</div>
            <div className="Read_mango">Читай мангу с нами</div>
          </div>
        </div>
        <div className="Header_center">
          <div className="Search">
            <img src={Search} alt=""/>
          </div>
          <div className="Input">Placeholder</div>
        </div>
        <div className="Header_right">
          <button className="Button_1">Войти</button>
          <button className="Button_2">регистрация</button>
        </div>
      </div>
    </div>
  );
}



export default Header;