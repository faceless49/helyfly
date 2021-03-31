import s from './Subtitle.module.scss';

export const Subtitle = (props) => {
    return (
        <>
        <h3 className={s.subtitle}>{props.subtitle}</h3>
        </>
    )
}
