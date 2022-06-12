import { CommonActions, useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Center } from '../../components/layout/center';
import { CenterContainer } from '../../components/layout/container';
import { PaddingBottom } from '../../components/layout/padding-bottom';
import { PageLayout } from '../../components/page-layout/page-layout';
import EmailVerifiedSVG from '../../components/svg-components/email-verified-svg/email-verified-svg';
import { H1 } from '../../components/typography/h1';
import { Subtitle } from '../../components/typography/subtitle';

export default function EmailVerified() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <CenterContainer>
        <PaddingBottom>
          <Center>
            <EmailVerifiedSVG />
          </Center>
        </PaddingBottom>
        <PaddingBottom>
          <H1>{t('email_verify')}</H1>
        </PaddingBottom>
        <Subtitle>{t('please_wait_while_we_redirect_you')}</Subtitle>
      </CenterContainer>
    </PageLayout>
  );
}