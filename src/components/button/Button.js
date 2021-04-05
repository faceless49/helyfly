import s from './Button.module.scss';

export const Button = (props) => {
    return (
        <button className={s.btn} style={props.animation}>
           <span> {props.title} </span>
        </button>
    );
}







