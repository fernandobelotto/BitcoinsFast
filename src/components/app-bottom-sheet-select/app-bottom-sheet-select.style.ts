import styled from 'styled-components/native';

export const ButtonBottomSheetSelect = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  border-color: ${props => props.theme.black_10};
  padding-top: 18px;
  font-size: ${props => props.theme.fontSize.md};
  padding-bottom: 18px;
  padding-left: 16px;
  box-shadow: ${props => props.theme.shadow};
  background-color: ${props => props.theme.white_100};
  color: ${props => props.theme.black_70};
  padding-right: 16px;
  width: 100%;
`;

export const MinorPadding = styled.View`
  padding-bottom: 8px;
`;

export const StyledText = styled.Text`
  color: ${props => props.theme.black_70};
  font-family: ${props => props.theme.fontFamily.poppins_regular};
`;
