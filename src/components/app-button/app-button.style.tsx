import styled from 'styled-components/native';

export const AppButtonStyled = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};

  padding: 20px;
  text-align: center;
`;

export const AppButtonTextStyled = styled.Text`
  color: ${props => props.theme.black};
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.semiBold};

  text-align: center;
`;
