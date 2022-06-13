import styled from 'styled-components/native';

export const H1 = styled.Text`
  font-size: ${props => props.theme.fontSize.xxl};
  font-family: ${props => props.theme.fontFamily.poppins_bold};
  color: ${props => props.theme.black_100};
  text-align: center;
  width: 100%;
`;
