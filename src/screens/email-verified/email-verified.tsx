import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Center } from '../../components/layout/center';
import { CenterContainer } from '../../components/layout/container';
import { PaddingBottom } from '../../components/layout/padding-bottom';
import { PageLayout } from '../../components/page-layout/page-layout';
import EmailVerifiedSVG from '../../components/svg-components/email-verified-svg/email-verified-svg';
import { H1 } from '../../components/typography/h1';
import { Subtitle } from '../../components/typography/subtitle';
import { useAppDispatch } from '../../store';
import { setSessionSecret } from '../../store/slices/session.slice';

export default function EmailVerified({ route }: any) {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        if (route.params?.secret) {
          dispatch(setSessionSecret(route.params?.secret));
        }
      }, 3000);
    }, [route, dispatch]),
  );

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
