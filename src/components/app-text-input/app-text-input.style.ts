import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const TextInputStyled = styled(TextInput)`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => (props.error ? 'red' : props.theme.black)};
  padding-top: 18px;
  font-size: ${props => props.theme.fontSize.md};
  padding-bottom: 18px;
  padding-left: 16px;
  background-color: ${props => props.theme.white_100};
  color: ${props => props.theme.black_70};
  padding-right: 16px;
  font-family: ${props => props.theme.fontFamily.poppins_regular};
  width: 100%;
`;

export const StyledView = styled.View`
  width: 100%;
`;
