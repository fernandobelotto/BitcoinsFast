import { t } from 'i18next';
import React from 'react';
import { Center } from '../../components/layout/center';
import { PageLayout } from '../../components/page-layout/page-layout';
import EmailVerifiedSVG from '../../components/svg-components/email-verified-svg/email-verified-svg';
import { H1 } from '../../components/typography/h1';
import { Subtitle } from '../../components/typography/subtitle';

export default function EmailVerified() {
  return (
    <PageLayout>
      <Center>
        <EmailVerifiedSVG />
      </Center>
      <H1>{t('email_verify')}</H1>
      <Subtitle>{t('please_wait_while_we_redirect_you')}</Subtitle>
    </PageLayout>
  );
}
