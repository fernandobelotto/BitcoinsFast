import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const TextInputStyled = styled(TextInput)`
  font-size: ${props => props.theme.fontSize.md};
  font-family: ${props => props.theme.fontFamily.poppins_regular};
  color: ${props => props.theme.black_70};
  width: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px;
`;

export const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => (props.error ? 'red' : props.theme.black)};
  border-width: ${props => (props.error ? '3px' : '1px')};
  padding: 16px;
  background-color: ${props => props.theme.white_100};
  width: 100%;
`;
