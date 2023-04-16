const ButtonStyle = ({
  children,
  color = "white",
  size = "sm",
  background = "red",
  outline,
  block,
  active,
  primary,
  secondary,
  danger,
  success,
  warning,
  dark,
  sm,
  lg,
}) => {
  const Click = {
    border: "1px solid black",
    backgroundColor: background,
    color: color,
    padding: "8px",
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

  if (outline) {
    Click["backgroundColor"] = "transparent";
    Click["border"] = `1px solid ${background}`;
    Click["color"] = background;
  }
  if (block) {
    Click["display"] = "block";
    Click["width"] = "100%";
  }
  if (active) {
    Click["backgroundColor"] = "rgb(233,150,122)";
  }
  return (
    <>
      <button style={Click}>{children}</button>
    </>
  );
};
export default ButtonStyle;
