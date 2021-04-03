import s from "./Feedback.module.scss";
import { SimpleRating } from "../ratingBlock/simpleRating/SimpleRating";

export const Feedback = (props) => {
  return (
    <div className={s.feedback}>
      <div className={s.column}>
        <div className={s.feedHeader}>
          <div style={props.style} className={s.imgWrap}></div>
          <div className={s.wrapper}>
            <h4 className={s.name}>{props.name}</h4>
            <span className={s.proffession}>{props.proffession}</span>
            <SimpleRating />
          </div>
        </div>
        <span className={s.minFeed}>{props.text}</span>
      </div>
      <p className={s.bigFeed}>{props.feedText}</p>
      <span className={s.date}><time dateTime={props.dateTime}>{props.date}</time></span>
    </div>
  );
};
