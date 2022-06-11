import { t } from 'i18next';
import React from 'react';
import { Center } from '../../components/layout/center';
import { PageLayout } from '../../components/page-layout/page-layout';
import VerifyEmailSVG from '../../components/svg-components/verify-email-svg/verify-email-svg';
import { H1 } from '../../components/typography/h1';
import { Subtitle } from '../../components/typography/subtitle';

export default function VerifyEmail() {
  return (
    <PageLayout>
      <Center>
        <VerifyEmailSVG />
      </Center>
      <H1>{t('verify_your_email')}</H1>
      <Subtitle>{t('please_check_your_emails')}</Subtitle>
    </PageLayout>
  );
}
