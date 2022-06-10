import React, { useState } from 'react';
import AppButton from '../../components/app-button/app-button';
import AppFieldLabel from '../../components/app-field-label/app-field-label';
import AppSelect from '../../components/app-select/app-select';
import { Heading } from '../../components/heading/heading';
import { PageLayout } from '../../components/page-layout/page-layout';
import { Languages } from '../../constants/language';
import { useTranslation } from 'react-i18next';

export default function SelectLanguage() {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <PageLayout>
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
      <AppButton>Continue</AppButton>
      <AppFieldLabel>Email</AppFieldLabel>
    </PageLayout>
  );
}
