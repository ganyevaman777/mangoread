import './Reg.css';
import Profile from "../Images/Profile.svg"



function Reg() {
    return (
      <div className="Reg">
        <div className="Reg_1">
            <div className="Reg_pro">
              <img src={Profile} alt=""/>
            </div>
            <div className="Reg_but">ДОБАВИТЬ ФОТО</div>
        </div>
        <div className="Reg_2">
            <input className="Log_input" placeholder="Username"></input>
            <input className="Log_input" placeholder="Nickname"></input>
            <input className="Log_input" placeholder="Password" type="password"></input>
            <button className="Log_button">регистрация</button>
        </div>
      </div>
  );
}



export default Reg;