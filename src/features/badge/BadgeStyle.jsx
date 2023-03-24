const BadgeStyle = ({
  children,
  color = "blue",
  background = "red",
  Pill,
  ...props
}) => {
  const Click = {
    border: "1px solid black",
    display: "block",
    backgroundColor: background,
    color: color,
    textAlign: "center",
  };

  if (Pill) {
    Click["borderRadius"] = "20px";
  }
  return (
    <>
      <span style={Click}>{children}</span>
    </>
  );
};
export default BadgeStyle;
