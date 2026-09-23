const Total = ({ parts }) => {
  let sum = 0;
  const total = parts.reduce((sum, currentValue) => {
    return sum + currentValue.exercises;
  }, sum);

  return (
    <strong>
      <p>{`Total of ${total} exercises`}</p>
    </strong>
  );
};

export default Total;
