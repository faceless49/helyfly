import s from "./Condition.module.scss";

export const Condition = (props) => {
  return (
    <div className={s.condition}>
      <img src={props.src} alt="" className={s.conditionIcon} />
      <span className={s.conditionItem}>{props.text}</span>
    </div>
  );
};
