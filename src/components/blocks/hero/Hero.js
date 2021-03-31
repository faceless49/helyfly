import s from "./Hero.module.scss";
import { Profile } from "./../../profile/Profile";
import { NavLink } from "react-router-dom";
import { Subtitle } from "../../subtitle/Subtitle";

export const Hero = (props) => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.inner}>
          <div className="blockRow">
            {" "}
            <div className={s.blockColumn}>
              <Subtitle subtitle="Об организаторе:" />
              <p className={s.heroInfo}>
                {props.text1}Всем привет! Я фотограф Мария! И по мимо фотосъемки
                я так же являюсь членом группы экспертов туристической отрасли,
                которые хорошо разбираются в маркетинге, операциях и услугах
                обслуживания клиентов, специализирующихся на совместном
                использовании и частных турах.
              </p>

              <p className={s.heroInfo}>
                {props.text2}Сначала мы (я и моя команда) изучаем интересы
                клиентов, а затем придумываем подходящее решение, которое
                соответствует бюджету и планам клиента. Мы никогда не зависим от
                субпоставщиков и не свяжемся…
              </p>
              <NavLink to="/1" className={s.moreLink}>
                <span>Читать еще</span>
              </NavLink>
            </div>
            <div className={s.blockColumn}>
              <Subtitle subtitle="Что я предоставлю:" />
              <p className={s.heroInfo}>
                {props.text3}Встречу вас на машине после длительного перелёта.
                Качественный подбор места и локации для вашей съемки. При
                необходимости всегда возможно прерваться на обед/ужин. <br />
                Более 50 фотографий на выходе с обработкой и замечательные
                впечатления о Дубае!
              </p>
              <NavLink to="/1" className={s.moreLink}>
                <span>Читать еще</span>
              </NavLink>
            </div>
          </div>
          <Profile class={s.heroAvatar} proffession="Фотограф" />
        </div>
      </div>
    </section>
  );
};
