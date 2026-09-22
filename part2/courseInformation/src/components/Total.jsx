const Total = ({ parts }) => {
  let total = 0;
  const totalParts = parts.forEach((part) => {
    total += part.exercises;
  });

  return (
    <strong>
      <p>{`Total of ${total} exercises`}</p>
    </strong>
  );
};

export default Total;
