import s from "./HeroName.module.scss";

export const HeroName = (props) => {
  return (<h3 className={s.name}>{props.profileName}</h3>);
};
