import styled from "styled-components";

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0;
`;

export default Text;
