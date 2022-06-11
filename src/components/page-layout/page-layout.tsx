import styled from 'styled-components/native';

export const PageLayout = styled.View`
  padding: 24px;
  display: flex;
  background-color: ${(props) => props.backgroundColor || props.theme.white_90};
  flex: 1;
`;
