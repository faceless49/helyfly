import s from "./Footer.module.scss";
import logo from "./../../../assets/icons/logo.svg";
import vk from "./../../../assets/icons/social/vk.svg";
import fb from "./../../../assets/icons/social/fb.svg";
import insta from "./../../../assets/icons/social/insta.svg";
import { NavLink } from "react-router-dom";
import masterCard from "./../../../assets/icons/payment/mc.svg";
import visa from "./../../../assets/icons/payment/visa.svg";
export const Footer = (props) => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <img src={logo} alt="Logo" className={s.logo} />
          <div className={s.social}>
            <NavLink to={"/"} className={s.socialLink}>
              <img src={vk} alt="vkontakte" className={s.socialItem} />
            </NavLink>
            <NavLink to={"/"} className={s.socialLink}>
              <img src={fb} alt="facebook" className={s.socialItem} />
            </NavLink>
            <NavLink to={"/"} className={s.socialLink}>
              <img src={insta} alt="instagramm" className={s.socialItem} />
            </NavLink>
          </div>
        </div>
        <div className={s.footerBottom}>
          <div className={s.payment}>
            <NavLink to={"/"} className={s.paymentLink}>
              <img src={visa} alt="visa payment" className={s.paymentItem} />
            </NavLink>
            <NavLink to={"/"} className={s.paymentLink}>
              <img
                src={masterCard}
                alt="mastercard payment"
                className={s.paymentItem}
              />
            </NavLink>
          </div>
          <select className={s.language} name="lang" id="lang">
            <option value="/">RU</option>
            <option class="eng" value="/en/main">
              ENG
            </option>
          </select>
          <div className={s.information}>
            <span className={s.text}>Тех. поддержка: 8(800)700-00-00</span>
            <span className={s.text}>© 2018 HELYFLY. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
