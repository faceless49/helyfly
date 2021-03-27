import s from "./Photoset.module.scss";
import image from "./../../../assets/img/photoset/1.jpg";
import image1 from "../../../assets/icons/1.svg";
import image2 from "../../../assets/icons/2.svg";
import image3 from "../../../assets/icons/3.svg";
import image4 from "../../../assets/icons/4.svg";
export const Photoset = (props) => {
  return (
    <section className={s.photoset}>
      <div className={s.container}>
        <div className={s.inner}>
          <h2 className={s.title}>
            Фотосессия <br />в вертолете
          </h2>
          <div className={s.wrap}>
            <p className={s.text}>
              Полет на вертолете это прекрасная возможность получить новые
              ощущения! А наш замечательный фотограф запечатлит лучшие моменты!
            </p>
            <ul className={s.list}>
              <li className={s.listItem}>
                <img src={image1} alt="clock" className={s.icon} />
                <span>3 часа съемки</span>
              </li>
              <li className={s.listItem}>
                <img src={image2} alt="photos" className={s.icon} />
                <span>Более 50 фотографий</span>
              </li>
              <li className={s.listItem}>
                <img src={image3} alt="location" className={s.icon} />
                <span>Москва</span>
              </li>
              <li className={s.listItem}>
                <img src={image4} alt="dialog" className={s.icon} />
                <span>Готовы ответить на любые вопросы</span>
              </li>
            </ul>
          </div>
          <img src={image} alt="" className={s.image} />
        </div>
      </div>
    </section>
  );
};
