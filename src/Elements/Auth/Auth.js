import './Auth.css';
import Login from './Login.js'



function Auth() {
    return (
            <div className="Auth">
                <div className="Log_1">
                    <div className="x">
                        <div className="x1"></div>
                        <div className="x2"></div>
                    </div>
                    <div className="Log_reg">
                        <button className="Log_but">Вход</button>
                        <button className="Reg_but">Регистрация</button>
                    </div>
                </div>
                <div className="Log_2">
                    <div className="Log_line"></div>
                </div>
                <Login/>
            </div>
    )
}



export default Auth;