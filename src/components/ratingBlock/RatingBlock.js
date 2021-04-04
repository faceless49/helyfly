import s from "./RatingBlock.module.scss";
import cup from "./../../assets/icons/cup.svg";
import { SimpleRating } from "./simpleRating/SimpleRating";
export const RatingBlock = (props) => {
  return (
    <div className={s.ratingBlock} style={props.style}>
      <img src={cup} className={s.cup} alt="Cup" />
      <div className={s.ratingWrap}>
        <span className={s.ratingText}>
          Более <span>50 </span>отзывов с оценкой
        </span>
        <SimpleRating />
      </div>
    </div>
  );
};
