const ButtonStyle = ({
  children,
  color = "white",
  size = "sm",
  background = "red",
  outline,
  block,
  active,
  ...props
}) => {
  const Click = {
    border: "1px solid black",
    backgroundColor: background,
    color: color,
  };

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
  // if ((size = "lg")) {
  //   // Click["width"] = "100px";
  // }
  return (
    <>
      <button style={Click}>{children}</button>
    </>
  );
};
export default ButtonStyle;
