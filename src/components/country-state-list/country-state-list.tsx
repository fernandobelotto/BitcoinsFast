import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StateItemType, states } from '../../constants/usa-states';
import AppSearchField from '../app-search-field/app-search-field';
import {
  CountryStateListTitle,
  CountryStateItem,
  CountryStateName,
} from './country-state-list.style';

type CountryStateListProps = {
  onSelect: (countryState: StateItemType) => void;
};

export default function CountryStateList({ onSelect }: CountryStateListProps) {
  const { t } = useTranslation();

  const [query, setQuery] = useState('');

  const [filteredCountriesList, setFilteredCountriesList] = useState(states);

  function handleChangeQuery(text: string) {
    setQuery(text);
    if (text.length === 0) {
      setFilteredCountriesList(states);
    } else {
      setFilteredCountriesList(
        states.filter(countryState =>
          countryState.label.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    }
  }

  return (
    <View>
      <CountryStateListTitle>{t('country_state')}</CountryStateListTitle>
      <AppSearchField
        placeholder={t('search')}
        value={query}
        onChangeText={text => handleChangeQuery(text)}
      />
      <FlatList
        data={filteredCountriesList}
        renderItem={({ item }: { item: StateItemType }) => (
          <CountryStateItem key={item.code} onPress={() => onSelect(item)}>
            <CountryStateName>{item.label}</CountryStateName>
          </CountryStateItem>
        )}
      />
    </View>
  );
}
