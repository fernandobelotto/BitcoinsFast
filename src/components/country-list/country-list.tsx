import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { countries, CountryItemType } from '../../constants/countries';
import { useAppDispatch } from '../../store';
import { setCountry } from '../../store/slices/user.slice';
import AppSearchField from '../app-search-field/app-search-field';

const CountryListTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.black};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  width: 100%;
  text-align: center;
  margin-bottom: 18px;
`;

const CountryName = styled.Text`
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.black};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  width: 100%;
  text-align: left
  margin-left: 10px;
`;

const CountryItem = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 14px;
  border-bottom-color: ${props => props.theme.black_10};
  border-bottom-width: 2px;
`;

type CountryListProps = {
  onSelect: (country: CountryItemType) => void;
};

export default function CountryList({ onSelect }: CountryListProps) {
  const { t } = useTranslation();

  const [query, setQuery] = useState('');

  const [filteredCountriesList, setFilteredCountriesList] = useState(countries);

  function handleChangeQuery(text: string) {
    setQuery(text);
    if (text.length === 0) {
      setFilteredCountriesList(countries);
    } else {
      setFilteredCountriesList(
        countries.filter(country =>
          country.label.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    }
  }

  const countryFlatStyle = {
    borderRadius: 50,
    height: 30,
    width: 30,
  };
  return (
    <View>
      <CountryListTitle>{t('country')}</CountryListTitle>
      <AppSearchField
        placeholder={t('search')}
        value={query}
        onChangeText={text => handleChangeQuery(text)}
      />
      <FlatList
        data={filteredCountriesList}
        renderItem={({ item }: { item: CountryItemType }) => (
          <CountryItem
            key={item.code}
            onPress={() => onSelect(item)}>
            <CountryFlag
              isoCode={item.code}
              size={30}
              style={countryFlatStyle}
            />
            <CountryName>{item.label}</CountryName>
          </CountryItem>
        )}
      />
    </View>
  );
}
