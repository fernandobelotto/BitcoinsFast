import styled from 'styled-components/native';

export const HelperText = styled.Text`
  font-family: ${props => props.theme.fontFamily.poppins_regular};
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.theme.black_70};
  width: 100%;
  text-align: center;
`;
