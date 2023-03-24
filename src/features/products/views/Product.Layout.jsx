import styled from "styled-components";
import { Div, Img, TitleTextContainer } from "../styled";
const FetchItem = ({ id, title, image, price }) => {
  // let { id, title, image, price } = props.item;
  return (
    <Div>
      <div>Id : {id}</div>
      <TitleTextContainer>Title : {title}</TitleTextContainer>
      <Img src={image} alt="" />
      <div>Price : {price}</div>
    </Div>
  );
};
// const TitleTextContainer = styled(Title)``;
export default FetchItem;
