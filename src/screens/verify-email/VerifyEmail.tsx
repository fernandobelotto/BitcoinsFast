import { t } from 'i18next';
import React, { useEffect } from 'react';
import { Center } from '../../components/layout/center';
import { CenterContainer } from '../../components/layout/container';
import { PaddingBottom } from '../../components/layout/padding-bottom';
import { PageLayout } from '../../components/page-layout/page-layout';
import VerifyEmailSVG from '../../components/svg-components/verify-email-svg/verify-email-svg';
import { H1 } from '../../components/typography/h1';
import { Subtitle } from '../../components/typography/subtitle';
import { useVerifyEmail } from '../../hooks/use-verify-email';
import { DefaultScreenProps } from '../../routes/app-routes';

export default function VerifyEmail({ navigation }: DefaultScreenProps) {
  const { isEmailVerified } = useVerifyEmail();

  useEffect(() => {
    if (isEmailVerified) {
      navigation.push('EmailVerified');
    }
  }, [isEmailVerified, navigation]);

  return (
    <PageLayout>
      <CenterContainer>
        <PaddingBottom>
          <Center>
            <VerifyEmailSVG />
          </Center>
        </PaddingBottom>
        <PaddingBottom>
          <H1>{t('verify_your_email')}</H1>
        </PaddingBottom>
        <Subtitle>{t('please_check_your_emails')}</Subtitle>
      </CenterContainer>
    </PageLayout>
  );
}
