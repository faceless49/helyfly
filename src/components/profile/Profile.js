import s from "./Profile.module.scss";
import { NavLink } from "react-router-dom";
import { HeroName } from "../heroName/HeroName";

export const Profile = (props) => {
  return (
    <div className={`${s.profile} ${props.class}`}>
      <div className={s.avatarWrap}></div>
      <HeroName profileName="Марина Иванова"/>
      <span className={s.proffession}>{props.proffession}</span>
      <NavLink to="/1" className={s.moreLink}>
        <span>Показать больше <br/>информации о фотографе</span>
      </NavLink>
    </div>
  );
};
