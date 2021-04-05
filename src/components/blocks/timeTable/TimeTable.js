import { DatePick } from "../../datePick/DatePick";
import { RatingBlock } from "../../ratingBlock/RatingBlock";
import s from "./TimeTable.module.scss";

export const TimeTable = (props) => {
  return (
    <section className={s.time}>
      <div className={s.container}>
        <h2 className={s.title}>
          {props.title}Доступная съемка
          <br /> в ближайшее время:
        </h2>
        <div className={s.inner}>
          <div className={s.date}>
            <time dateTime="2021-09-14" className={s.datePick}>
              {props.date}Пятница, <span>14 </span>сентября
            </time>
            <DatePick />
          </div>

          <div class={s.blockRow}>
            <div class={s.blockColumn}>
              <div className={s.spWrap}>
                <span>
                  <time dateTime="15:00 - 18:00">15:00 - 18:00</time>
                </span>
                <span className={s.price}>850$</span>
                <span className={s.place}>Осталось — 1 место</span>
              </div>

              <button className={s.btn}>
                <span> Выбрать</span>
              </button>
            </div>
          </div>

          <div class={s.blockRow}>
            <div class={s.blockColumn}>
              <div className={s.spWrap}>
                <span>
                  <time dateTime="19:00 - 22:00">19:00 - 22:00</time>
                </span>
                <span className={s.price}>850$</span>
                <span className={s.place}>Осталось — 1 место</span>
              </div>

              <button className={s.btn}> <span> Выбрать</span></button>
            </div>
          </div>
          <RatingBlock />
        </div>
      </div>
    </section>
  );
};
