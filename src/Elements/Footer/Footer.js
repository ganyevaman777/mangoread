import './Footer.css';
import '../Fonts/Roboto/style.css'
import Map from "../Images/Map.svg"
import Logo_2 from "../Images/Logo_2.svg"
import Facebook from "../Images/Facebook.svg"
import Instagram from "../Images/Instagram.svg"
import Twitter from "../Images/Twitter.svg"





function Footer() {
  return (
    <div className="Footer">
        <div className="Content">
        <div className="Footer_left">
          <div className="Logo">
            <img src={Logo_2} alt=""/> 
          </div>
          <div className="Name">
            <div className="Mango_read">MangoRead</div>
            <div className="Read_mango">Читай мангу с нами</div>
          </div>
        </div>
          <div className="Media">
            <div className="Social">
              <div className="Social_link">
                <img src={Facebook} alt=""/>
              </div>
              <div className="Social_link">
                <img src={Instagram} alt=""/>
              </div>
              <div className="Social_link">
                <img src={Twitter} alt=""/>
              </div>
            </div>
            <div className="Links">
              <div className="Link">Link One</div>
              <div className="Link">Link Two</div>
              <div className="Link">Link Three</div>
            </div>
          </div>
          <div className="Map">
            <img src={Map} alt=""/>
          </div>
        </div>
        <div className="Bottom">
          <div className="Devider"></div>
          <div className="Row">
            <div className="c2022">©2022, All right reserved.</div>
            <div className="Footer_links">
              <button className="Footer_link">Privacy Policy</button>
              <button className="Footer_link">Terms of Service</button>
              <button className="Footer_link">Cookies Settings</button>
            </div>
          </div>
        </div>
    </div>
  );
}



export default Footer;