import './Second.css';
import Jojo from "../Images/Jojo.svg"
import Pro from "../Images/Pro.svg"
import Pro_2 from "../Images/Pro_2.svg"
import Pro_3 from "../Images/Pro_3.svg"
import Vector from "../Images/Vector.svg"




function Second() {
  return (
    <div className="Second">
        <div className="Mango_name">
          <div className="Back">
            <div className="Back_1">
              <img src={Vector} alt=""/>
            </div>
            <div className="Back_2">Назад</div>
          </div>
          <div className="Image_name">
            <div className="Image">
              <img src={Jojo} alt=""/>
            </div>
            <div className="Information">
              <div className="Name_mango">Название манги</div>
              <div className="Inform">
                <div className="Info_1">Информация:</div>
                <div className="Info">Тип:<div className="Info_s">блабла</div></div>
                <div className="Info">Год: <div className="Info_s">2001</div></div>
                <div className="Info_4">Жанр: <div className="Info_s">Юри,Повседневность, Постапокалиптика, Приключения, Психология, Романтика, Сверхъестественное</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Line"></div>
        <div className="Synopsis">
            <div className="Syn_word">Синопсис</div>
            <div className="Syn_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium, dictum tellus vitae, euismod neque. Nulla facilisi.</div>
        </div>
        <div className="Line"></div>
        <div className="Comments">
          <div className="Com">
            <div className="Top_com">Топ комментарий</div>
            <div className="Add_com">добавить комментарий</div>
          </div>
          <div className="Comment">
            <div className="Pro">
              <img src={Pro} alt=""/>
            </div>
            <div className="Com_line"></div>
            <div className="Com_text">
              <div className="Nick">Имя,Никнейм</div>
              <div className="Comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</div>
            </div>
          </div>
          <div className="Comment">
            <div className="Pro">
              <img src={Pro_2} alt=""/>
            </div>
              <div className="Com_line"></div>
              <div className="Com_text">
                <div className="Nick">Имя,Никнейм</div>
                <div className="Comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</div>
              </div>
          </div>
          <div className="Comment">
            <div className="Pro">
              <img src={Pro_3} alt=""/>
            </div>
              <div className="Com_line"></div>
              <div className="Com_text">
                <div className="Nick">Имя,Никнейм</div>
                <div className="Comment_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</div>
              </div>
          </div>
        </div>
        <div className="Pagination"></div>
    </div>
  );
}



export default Second;