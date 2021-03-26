import s from "./Header.module.scss";
import logo from "./../../../assets/icons/logo.svg"
import usericon from './../../../assets/icons/usericon.svg';

export const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.inner}>
        <div className={s.wrapper}>
          <img src={logo} alt="" className={s.logo} />
          <a href="tel:+78001231212" className={s.phoneMoscow}>Москва</a>
          <div className={s.phone}>
            <span>Телефон:</span>
            <a href="tel:78001231212" className={s.phoneLink}>8(800)-123-12-12</a>
          </div>
        </div>
        <a href="/" className={s.user}>
          <img src={usericon} alt="" className={s.userImg}/>
        </a>
        </div>
      </div>
    </header>
  );
};



