import s from "./RatingBlock.module.scss";
import cup from "./../../assets/icons/cup.svg"
import { SimpleRating } from "./simpleRating/SimpleRating";
export const RatingBlock = (props) => {
  return (
    <div className={s.ratingBlock}>
      <img src={cup} className={s.cup} alt="Cup" />
      <span className={s.ratingText}>Более 50 отзывов с оценкой</span>
      <SimpleRating/>
    </div>
  );
};
