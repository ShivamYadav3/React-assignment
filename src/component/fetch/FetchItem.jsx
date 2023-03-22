import { Div, Img, TitleDiv } from "./styled";
const FetchItem = (props) => {
  let { id, title, image, price } = props.item;
  return (
    <Div>
      <div>Id : {id}</div>
      <TitleDiv>Title : {title}</TitleDiv>
      <Img src={image} alt="" />
      <div>Price : {price}</div>
    </Div>
  );
};

export default FetchItem;
