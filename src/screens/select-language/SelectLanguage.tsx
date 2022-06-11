import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton from '../../components/app-button/app-button';
import AppSelect from '../../components/app-select/app-select';
import { Heading } from '../../components/heading/heading';
import { PageLayout } from '../../components/page-layout/page-layout';
import { Languages } from '../../constants/language';
import { RootStackParamList } from '../../routes/app-routes';
import { Colors } from '../../styles/colors';

type SelectLanguageProps = NativeStackScreenProps<RootStackParamList>;

export default function SelectLanguage({ navigation }: SelectLanguageProps) {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <PageLayout backgroundColor={Colors.BLACK_100}>
      <Heading>{t('select_your_language')}</Heading>
      <AppSelect
        value={language}
        setValue={value => {
          setLanguage(value);
          changeLanguage(value);
        }}
        options={Object.keys(Languages).map(key => ({
          label: key,
          value: Languages[key],
        }))}
      />
      <AppButton
        title={t('continue')}
        onPress={() => {
          navigation.push('EmailAddress');
        }}
      />
    </PageLayout>
  );
}
