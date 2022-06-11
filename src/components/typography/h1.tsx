import styled from 'styled-components/native';

export const H1 = styled.Text`
  font-size: ${props => props.theme.fontSize.xxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.black_100};
  text-align: center;
  width: 100%;
`;
