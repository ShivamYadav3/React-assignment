const BadgeStyle = ({
  children,
  color = "blue",
  background = "red",
  Pill,
  active,
  primary,
  secondary,
  danger,
  success,
  warning,
  dark,
  sm,
  lg,
  ...props
}) => {
  const Click = {
    border: "1px solid black",
    display: "block",
    backgroundColor: background,
    color: color,
    textAlign: "center",
  };
  if (primary) {
    Click["backgroundColor"] = "aqua";
  }
  if (secondary) {
    Click["backgroundColor"] = "grey";
  }
  if (danger) {
    Click["backgroundColor"] = "red";
  }
  if (success) {
    Click["backgroundColor"] = "green";
  }
  if (warning) {
    Click["backgroundColor"] = "yellow";
  }
  if (dark) {
    Click["backgroundColor"] = "blue";
  }
  if (sm) {
    Click["padding"] = "2px";
  }
  if (lg) {
    Click["padding"] = "10px";
  }

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
