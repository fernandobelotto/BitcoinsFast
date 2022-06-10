import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-size: ${props => props.theme.fontSize.xxxl};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.primary};
  box-shadow: ${props => props.theme.shadow.primary};
`;
