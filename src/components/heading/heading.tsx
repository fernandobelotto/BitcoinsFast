import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-family: ${props => props.theme.fontFamily.poppins_bold};
  font-size: ${props => props.theme.fontSize.xxxl};
  color: ${props => props.theme.primary};
  box-shadow: ${props => props.theme.shadow};
`;
