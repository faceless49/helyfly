import s from './Title.module.scss';

export const Title = (props) => {
    return (
        <>
        <h2 className={s.title}>{props.title}</h2>
        </>
    )
}
