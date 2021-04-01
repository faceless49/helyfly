import s from "./Gallery.module.scss";
import image1 from "./../../../assets/img/gallery/1.jpg";
import image2 from "./../../../assets/img/gallery/2.jpg";
import image3 from "./../../../assets/img/gallery/3.jpg";
import image4 from "./../../../assets/img/gallery/4.jpg";
import { NavLink } from "react-router-dom";

export const Gallery = (props) => {
  return (
    <section className={s.gallery}>
        <div className={s.inner}>
          <h2 className={s.title}>Фотографии
пакета</h2>
          <div className={s.content}>
            <div className={s.imgWrap}><img src={image1} alt="" /></div>
            <div className={s.imgWrap}><img src={image2} alt="" /></div>
            <div className={s.imgWrap}><img src={image3} alt="" /></div>
            <div className={s.imgWrap}><img src={image4} alt="" /></div>
            <div className={s.imgWrap}><img src={image1} alt="" /></div>
            <div className={s.imgWrap}><img src={image2} alt="" /></div>
            <div className={s.imgWrap}><img src={image3} alt="" /></div>
            <div className={s.imgWrap}><img src={image4} alt="" /></div>
        </div>
        <NavLink to="/1" className={s.moreLink}><span>Показать все фото</span></NavLink>
      </div>
    </section>
  );
};
