const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return <p className={type === "error" ? "error" : "message"}>{message}</p>;
};

export default Notification;
