import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton from '../../components/app-button/app-button';
import AppSelect from '../../components/app-select/app-select';
import { Heading } from '../../components/heading/heading';
import { CenterContainer } from '../../components/layout/container';
import { PaddingBottom } from '../../components/layout/padding-bottom';
import { PageLayout } from '../../components/page-layout/page-layout';
import { Languages } from '../../constants/language';
import { RootStackParamList } from '../../routes/app-routes';
import { Colors } from '../../styles/colors';
import RNBootSplash from 'react-native-bootsplash';

type SelectLanguageProps = NativeStackScreenProps<RootStackParamList>;

export default function SelectLanguage({ navigation }: SelectLanguageProps) {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <PageLayout backgroundColor={Colors.BLACK_100}>
      <CenterContainer>
        <PaddingBottom>
          <Heading>{t('select_your_language')}</Heading>
        </PaddingBottom>
        <PaddingBottom>
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
        </PaddingBottom>

        <AppButton
          title={t('continue')}
          onPress={() => {
            navigation.push('EmailAddress');
          }}
        />
      </CenterContainer>
    </PageLayout>
  );
}
