import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
  if (text === "Positive") {
    return (
      <p>
        {text}: {value} %
      </p>
    );
  } else {
    return (
      <p>
        {text}: {value}
      </p>
    );
  }
};

const Statistics = ({ title, texts, good, bad, neutral }) => {
  const total = good + bad + neutral;
  const feedbackTotal = good * 1 + bad * -1 + neutral * 0;
  const average = feedbackTotal === 0 ? 0 : feedbackTotal / total;
  const percentage = (good * 100) / total;

  if (total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <Header title={title} />
        <StatisticLine text={texts.good} value={good} />
        <StatisticLine text={texts.neutral} value={neutral} />
        <StatisticLine text={texts.bad} value={bad} />
        <StatisticLine text={texts.all} value={total} />
        <StatisticLine text={texts.average} value={average} />
        <StatisticLine text={texts.percentage} value={percentage} />
      </>
    );
  }
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
    percentage: "Positive",
  };

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Header title={appTitle} />
      <Button text={texts.good} onClick={handleGood} />
      <Button text={texts.neutral} onClick={handleNeutral} />
      <Button text={texts.bad} onClick={handleBad} />
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
