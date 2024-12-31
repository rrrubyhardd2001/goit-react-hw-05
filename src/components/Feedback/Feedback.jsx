import style from "./Feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedBack,
  positiveFeedBack,
}) {
  return (
    <div>
      <ul className={style.FeedUl}>
        <li className={style.FeedLi}>Good: {feedback.good}</li>
        <li className={style.FeedLi}>Neutral: {feedback.neutral}</li>
        <li className={style.FeedLi}>Bad :{feedback.bad}</li>
        <li className={style.FeedLi}>Total : {totalFeedBack}</li>
        <li className={style.FeedLi}>Positive : {positiveFeedBack}</li>
      </ul>
    </div>
  );
}
