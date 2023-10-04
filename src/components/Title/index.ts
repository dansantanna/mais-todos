import styled from "styled-components";
interface ITitle {
  fontSize?: number;
}
const Title = styled.span<ITitle>`
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ fontSize }) => fontSize ?? 42}px;
  font-weight: 800;
  line-height: 1.2em;
  margin: 0;
`;

export default Title;
