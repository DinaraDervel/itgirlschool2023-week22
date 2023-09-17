import s from "./Card.module.scss";

function Card(props) {
  return (
    <div className={s.card}>
      <h1 className={s.card__header}>{props.info.name}</h1>
      <div className={s.card__info}>
        <p className={s.card__paragraph}>Вселенная: {props.info.universe}</p>
        <p className={s.card__paragraph}>Альтер-эго: {props.info.alterego}</p>
        <p className={s.card__paragraph}>
          Род деятельности: {props.info.occupation}
        </p>
        <p className={s.card__paragraph}>Друзья: {props.info.friends}</p>
        <p className={s.card__paragraph}>Суперсилы: {props.info.superpowers}</p>
      </div>
      <img src={props.info.url} alt="superhero" className={s.card__img} />
    </div>
  );
}
export default Card;
