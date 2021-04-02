import s from "./Slide.module.scss";

export const Slide = (props) => {
  return (
    <div className={s.wrapperSlide}>
      <span className={s.number}>{props.number}</span>
      <div className={s.descrWrap}>
        <p className={s.subtitle}>{props.subtitle}</p>
        <span className={s.text}>{props.text}</span>
      </div>
    </div>
  );
};
