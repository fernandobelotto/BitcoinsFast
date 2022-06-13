import styled from 'styled-components/native';

export const AppButtonStyled = styled.TouchableOpacity`
  background-color: ${props => props.disabled ? props.theme.black_10 : props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};

  padding: 20px;
  text-align: center;
  width: 100%;
`;

export const AppButtonTextStyled = styled.Text`
  color: ${props => props.disabled ? props.theme.black_20 : props.theme.black};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.poppins_bold};

  text-align: center;
`;
