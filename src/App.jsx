import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default function App() {
  const defaultState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const LocalStorageData = () => {
    const dataBase = localStorage.getItem("feedbackData");
    return dataBase ? JSON.parse(dataBase) : defaultState;
  };

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const [feedback, setFeedback] = useState(LocalStorageData);

  const totalFeedBack = feedback.good + feedback.neutral + feedback.bad;

  const onResetHandle = () => {
    setFeedback(defaultState);
  };

  const positiveFeedBack = Math.round((feedback.good / totalFeedBack) * 100);

  useEffect(() => {
    localStorage.getItem("feedbackData", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onResetHandle}
        totalFBack={totalFeedBack}
      />
      {totalFeedBack > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedBack={totalFeedBack}
          positiveFeedBack={positiveFeedBack}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
