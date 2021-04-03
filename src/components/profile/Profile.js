import s from "./Profile.module.scss";
import { NavLink } from "react-router-dom";
import { HeroName } from "../heroName/HeroName";

export const Profile = (props) => {
  return (
    <div className={`${s.profile} ${props.class}`}>
      <div className={s.avatarWrap} style={props.style}></div>
      <div className={s.columnWrap} style={props.styledText}>
        <HeroName profileName="Марина Иванова" />

        <span className={s.proffession}>{props.proffession}</span>
        <NavLink to="/1" className={s.moreLink}>
          <span style={props.linkstyle}>
            Показать больше <br />
            информации о фотографе
          </span>
        </NavLink>
      </div>
    </div>
  );
};
