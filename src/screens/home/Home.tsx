import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '../../components/heading/heading';
import { CenterContainer } from '../../components/layout/container';
import { PageLayout } from '../../components/page-layout/page-layout';
import { Colors } from '../../styles/colors';

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageLayout backgroundColor={Colors.BLACK_100}>
      <CenterContainer>
        <Heading>{t('home')}</Heading>
      </CenterContainer>
    </PageLayout>
  );
}
