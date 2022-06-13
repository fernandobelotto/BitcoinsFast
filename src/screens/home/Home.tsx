import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '../../components/page-layout/page-layout';
import { H1 } from '../../components/typography/h1';
import { Colors } from '../../styles/colors';

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageLayout backgroundColor={Colors.BLACK_100}>
      <H1>{t('home')}</H1>
    </PageLayout>
  );
}
