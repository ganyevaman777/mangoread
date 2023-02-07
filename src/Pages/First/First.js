import './First.css';
import img_1 from "../Images/img_1.svg"
import img_2 from "../Images/img_2.svg"
import img_3 from "../Images/img_3.svg"
import img_4 from "../Images/img_4.svg"
import img_5 from "../Images/img_5.svg"
import img_6 from "../Images/img_6.svg"
import img_8 from "../Images/img_8.svg"
import img_9 from "../Images/img_9.svg"
import img_10 from "../Images/img_10.svg"
import img_11 from "../Images/img_11.svg"
import img_12 from "../Images/img_12.svg"
import Vector_1 from "../Images/Vector_1.svg"
import Vector_2 from "../Images/Vector_2.svg"
import Vector_3 from "../Images/Vector_3.svg"




function First() {
  return (
    <div className="First">
      <div className="First_main">
        <div className="Filter">
          <div className="Back">
            <div className="But">
              <div className="Back_1">
                <img src={Vector_3} alt=""/>
              </div>
              <div className="Back_2">Назад</div>
            </div>
          </div>
          <div className="Filt">
            <div className="Filt_m">
              <div className="Filt_n">Жанры</div>
              <div className="Filters">
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Боевик</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Боевые искусства</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Гарем</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Гендерная интрига</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Героическое фэнтези</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Детектив</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Дзёсэй</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Додзинси</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Драма</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">Игра</div>
                </div>
                <div className="Genres">
                  <input type="checkbox" className="Check"></input>
                  <div className="Genre">История</div>
                </div>
              </div>
            </div>
            <div className="Filt_line"></div>
          </div>
          <div className="Filt_but">
            <div className="Filt_button">
              <button className="Bton_1">Сбросить</button>
              <button className="Bton_2">Применить</button>
            </div>
          </div>
        </div>
        <div className="Cards">
          <div className="Card_block">
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_1} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_2} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_3} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_4} alt=""/>
            </div>
          </div>
          <div className="Card_block">
          <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_5} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_6} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_1} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_8} alt=""/>
            </div>
          </div>
          <div className="Card_block">
          <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_9} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_10} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_11} alt=""/>
            </div>
            <div className="Card">
              <div className="txt">
                <div className="txt_1">Год: 2000</div>
                <div className="txt_2">Название аниме оно может быть ...</div>
              </div>
              <img src={img_12} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="Pagination">
        <div className="Vector_1">
          <img src={Vector_1} alt=""/>
        </div>
        <div className="Numbers">
          <div className="Number_1">1</div>
          <div className="Number_2">2</div>
          <div className="Number">3</div>
          <div className="Number">4</div>
          <div className="Number_5">...</div>
          <div className="Num">99+</div>
        </div>
        <div className="Vector_2">
          <img src={Vector_2} alt=""/>
        </div>
      </div>
    </div>
  );
}



export default First;