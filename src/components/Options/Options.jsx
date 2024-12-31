import style from "./Options.module.css";

export default function Options({ updateFeedback, onReset, totalFBack }) {
  return (
    <div className={style.OpDiv}>
      <button className={style.OpLi} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.OpLi} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.OpLi} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFBack > 0 && (
        <button className={style.OpLi} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
