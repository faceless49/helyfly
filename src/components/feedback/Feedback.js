import { SimpleRating } from "../ratingBlock/simpleRating/SimpleRating";

export const Feedback = (props) => {
  return (
    <div className={s.feedback}>
        <div className={s.column}>
          <img className={s.img} src={props.src} alt="avatar" />
          <div className={s.wrapper}>
            <h4 className={s.name}>{props.name}</h4>
            <span className={s.proffession}>{props.proffession}</span>
            <SimpleRating />
          </div>
          <span className={s.minFeed}>{props.text}</span>
        </div>
        <p className={s.bigFeed}>{props.feedtext}</p>
        <span className={s.date}>{props.date}</span>
    </div>
  );
};
