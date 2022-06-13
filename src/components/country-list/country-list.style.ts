import styled from 'styled-components/native';

export const CountryListTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontFamily.poppins_semibold};
  width: 100%;
  text-align: center;
  margin-bottom: 18px;
`;

export const CountryName = styled.Text`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontFamily.poppins_bold};
  width: 100%;
  text-align: left
  margin-left: 10px;
`;

export const CountryItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 14px;
  border-bottom-color: ${props => props.theme.black_10};
  border-bottom-width: 2px;
`;

export const countryFlatStyle = {
  borderRadius: 50,
  height: 30,
  width: 30,
};
