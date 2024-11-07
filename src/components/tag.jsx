import styled from "styled-components";

const TextWrapper = styled.div`
  height: 20px;
  font: bold 14px/12px Kumbh Sans;
  color: #fdfde5;
  border: solid 1px #fdfde5;
  border-radius: 4px;
  text-indent: 2px;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px 8px 0;
`;

const Tag = ({ word, bgColor }) => <TextWrapper>{word}</TextWrapper>;

export default Tag;
