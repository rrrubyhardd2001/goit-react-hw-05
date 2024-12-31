import style from "./Description.module.css";

export default function Description() {
  return (
    <div className={style.mainDiv}>
      <h1 className={style.mainTitle}>sip happens Café</h1>
      <p className={style.mainText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
