import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const FeedbackButton = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const Statistics = ({ title, texts, good, bad, neutral }) => {
  const total = good + bad + neutral;
  const feedbackTotal = good * 1 + bad * -1 + neutral * 0;
  const averageValue = feedbackTotal === 0 ? 0 : feedbackTotal / total;
  const positivePercentage = (good * 100) / total;

  return (
    <>
      <Header title={title} />
      <p>
        {texts.good}: {good}
      </p>
      <p>
        {texts.neutral}: {neutral}
      </p>
      <p>
        {texts.bad}: {bad}
      </p>
      <p>
        {texts.all}: {total}
      </p>
      <p>
        {texts.average}: {averageValue}
      </p>
      <p>
        {texts.positive}: {positivePercentage}%
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const appTitle = "Give Feedback";
  const statistics = "Statistics";

  const texts = {
    good: "Good",
    bad: "Bad",
    neutral: "Neutral",
    all: "All",
    average: "Average",
    positive: "Positive",
  };

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Header title={appTitle} />
      <FeedbackButton text={texts.good} onClick={handleGood} />
      <FeedbackButton text={texts.neutral} onClick={handleNeutral} />
      <FeedbackButton text={texts.bad} onClick={handleBad} />
      <Statistics
        title={statistics}
        texts={texts}
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </>
  );
};

export default App;
