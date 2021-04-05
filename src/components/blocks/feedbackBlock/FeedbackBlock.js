import s from "./FeedbackBlock.module.scss";
import image1 from "./../../../assets/img/feedback/1.png";
import image2 from "./../../../assets/img/feedback/2.png";
import image3 from "./../../../assets/img/feedback/3.jpeg";
import { Feedback } from "../../feedback/Feedback";
import { NavLink } from "react-router-dom";

const feedBack = {
  feedAvatar1: {
   backgroundImage: `url(${image1})`,
  },
  feedAvatar2: {
    backgroundImage: `url(${image2})`,
  },
  feedAvatar3: {
    backgroundImage: `url(${image3})`,
  },

}




export const FeedbackBlock = (props) => {
  return (
    <section className={s.feedBack}>
      <div className={s.container}>
        <div className={s.inner}>
        <h2 className={s.title}>{props.title}Отзывы</h2>
        <Feedback
        style={feedBack.feedAvatar1}
          name="Валерия Антонова"
          proffession="Арт-директор"
          text="Супер! Я бы заказала съемку снова!"
          feedText="Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!"
          date="27 Апреля, 2019г."
        />
        <Feedback
          style={feedBack.feedAvatar2}
          name="Виталий Петров"
          proffession="Фотограф"
          text="Супер! Я бы заказал съемку снова!"
          feedText="Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. 
          Организация полёта отличная. Спасибо!"
          date="19 Апреля, 2019г."
        />
        <div className={s.thirdfeed}>
          <Feedback
          style={feedBack.feedAvatar3}
            name="Джим Керри"
            text="Супер! Я бы заказал съемку снова!"
            feedText="Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы 
с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!"
            date="11 Апреля, 2019г."
          />
        </div>
        </div>
      </div>
      <NavLink to="/1" className={s.moreLink}><span>Показать Все (134)</span></NavLink>
    </section>
  );
};

{
  /* <div class={s.feedbackRow}>
<div class={s.feedbackContentColumn}>
  <div className={s.feedbackHeader}>
    <img className={s.author} src={image1} alt="avatar" />
    <div className={s.authorInfo}>
      <h3 className={s.authorName}>
        {props.authorName}Валерия Антонова
      </h3>
      <span className={s.proffession}>{props.proffession}</span>
      <SimpleRating />
    </div>
    <span className={s.feedMin}>
     {props.feedMin} Супер! Я бы заказала съемку снова!
    </span>
  </div>
  <p className={s.feedBig}>{props.feedBig}
    Хотим выразить огромную благодарность вашей компании! Получили
    море ощущений, все прошло просто замечательно. Фотки получились
    великолепные, отдельное спасибо фотографу!
  </p>
</div>
</div> */
}
