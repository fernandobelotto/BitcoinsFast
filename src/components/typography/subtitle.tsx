import styled from 'styled-components/native';

export const Subtitle = styled.Text`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: ${props => props.theme.fontWeight.regular};
  color: ${props => props.theme.black_70};
  text-align: center;
  width: 100%;
`;
