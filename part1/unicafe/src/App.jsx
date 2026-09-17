import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const FeedbackButton = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);

const Statistics = ({ title, texts, good, bad, neutral }) => (
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
  </>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const appTitle = "Give Feedback";
  const statistics = "Statistics";

  const btnTexts = {
    good: "Good",
    bad: "Bad",
    neutral: "Neutral",
  };

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Header title={appTitle} />
      <FeedbackButton text={btnTexts.good} onClick={handleGood} />
      <FeedbackButton text={btnTexts.neutral} onClick={handleNeutral} />
      <FeedbackButton text={btnTexts.bad} onClick={handleBad} />
      <Statistics
        title={statistics}
        texts={btnTexts}
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </>
  );
};

export default App;
