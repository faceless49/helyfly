import s from "./Photoset.module.scss";
import image from "./../../../assets/img/photoset/1.jpg";
import image1 from "../../../assets/icons/1.svg";
import image2 from "../../../assets/icons/2.svg";
import image3 from "../../../assets/icons/3.svg";
import image4 from "../../../assets/icons/4.svg";
import { Condition } from "../../condition/Condition";
import { RatingBlock } from "../../ratingBlock/RatingBlock";

export const Photoset = (props) => {
  return (
    <section className={s.photoset}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.title}>Фотосессия в вертолете</h2>
          <p className={s.text}>
            Полет на вертолете это прекрасная возможность получить новые
            ощущения! А наш замечательный фотограф запечатлит лучшие моменты!
          </p>
          <Condition src={image1} text={"3 часа съемки"} />
          <Condition src={image2} text={"Более 50 фотографий"} />
          <Condition src={image3} text={"Москва"} />
          <Condition src={image4} text={"Готовы ответить на любые вопросы"} />
          <img src={image} alt="" className={s.image} />
          <RatingBlock />
        </div>
      </div>
    </section>
  );
};
