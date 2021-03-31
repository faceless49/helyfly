import { Title } from "../../title/Title";
import s from "./TimeTable.module.scss";

export const TimeTable = (props) => {
  return (
    <section className={s.time}>
      <div className={s.container}>
        <div className={s.inner}>
          <Title
            title="Доступная съемка 
в ближайшее время:"
          />
          <div className={s.table}>
            <div className={s.date}>
              <span>{props.date}Пятница, 14 сентября</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
