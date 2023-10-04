import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0 0 7px 7px;
  padding: 16px 42px 30px 42px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  width: fit-content;
  overflow: hidden;
`;

export default Card;
