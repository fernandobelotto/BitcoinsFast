import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { FlatList } from 'react-native-gesture-handler';
import { countries, CountryItemType } from '../../constants/countries';
import AppSearchField from '../app-search-field/app-search-field';
import {
  countryFlatStyle,
  CountryItem,
  CountryListTitle,
  CountryName,
} from './country-list.style';

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
          <CountryItem key={item.code} onPress={() => onSelect(item)}>
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
