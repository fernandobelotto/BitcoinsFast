import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AppButton from '../../components/app-button/app-button';
import AppTextInput from '../../components/app-text-input/app-text-input';
import { Container } from '../../components/layout/container';
import { PageLayout } from '../../components/page-layout/page-layout';
import { DefaultScreenProps } from '../../routes/app-routes';
import { useAppDispatch } from '../../store';
import { setEmail } from '../../store/slices/user.slice';

export default function EmailAddress({ navigation }: DefaultScreenProps) {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<{ email: string }>({
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();

  function onSubmit(values: { email: string }) {
    dispatch(setEmail(values.email));
    navigation.navigate('NewAccount');
  }

  return (
    <PageLayout>
      <Container>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <AppTextInput
              textContentType="emailAddress"
              keyboardType="email-address"
              onBlur={onBlur}
              error={!!errors.email}
              onChangeText={onChange}
              value={value}
              placeholder={t('your_email_address')}
              label="Email"
            />
          )}
        />

        <AppButton
          onPress={handleSubmit(onSubmit)}
          title={t('continue')}
          disabled={!isDirty || !isValid}
        />
      </Container>
    </PageLayout>
  );
}
