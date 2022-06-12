import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AppBottomSheetSelect from '../../components/app-bottom-sheet-select/app-bottom-sheet-select';
import AppButton from '../../components/app-button/app-button';
import CountryList from '../../components/country-list/country-list';
import CountryStateList from '../../components/country-state-list/country-state-list';
import { PaddingBottom } from '../../components/layout/padding-bottom';
import { Spacer } from '../../components/layout/spacer';
import { PageLayout } from '../../components/page-layout/page-layout';
import { HelperText } from '../../components/typography/helper-text';
import { CountryItemType } from '../../constants/countries';
import { StateItemType } from '../../constants/usa-states';
import { DefaultScreenProps } from '../../routes/app-routes';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCountry, setCountryState } from '../../store/slices/user.slice';
import { createAccount } from '../../store/thunks/create-account.thunk';
import { getPlataform } from '../../utils/check-plataform';
import { AppBottomSheet } from '../../components/app-bottom-sheet/app-bottom-sheet';
import Toast from 'react-native-toast-message';
import { notifyMessage } from '../../utils/notify-message';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NewAccount({ navigation }: DefaultScreenProps) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.user.loading);

  const { i18n, t } = useTranslation();

  const countrySheetReference = useRef<BottomSheet>(null);
  const countryStateSheetReference = useRef<BottomSheet>(null);

  function handleSelectCountry(selectedCountry: CountryItemType) {
    dispatch(setCountry(selectedCountry));
    countrySheetReference.current?.close();
  }

  function handleSelectCountryState(selectedCountry: StateItemType) {
    dispatch(setCountryState(selectedCountry));
    countryStateSheetReference.current?.close();
  }

  const { country, email, country_state } = useAppSelector(state => state.user);

  function handleContinue() {
    if (country && email) {
      const data = {
        language: i18n.language,
        platform: getPlataform(),
        email_address: email,
        country: country?.code,
        ...(country_state && { state: country_state?.code }),
      };
      dispatch(createAccount(data))
        .unwrap()
        .then(result => {
          AsyncStorage.setItem('session_key', result.session_key);
          navigation.push('VerifyEmail');
        });
    }
  }

  return (
    <PageLayout>
      <PaddingBottom>
        <HelperText>{t('lorem')}</HelperText>
      </PaddingBottom>
      <AppBottomSheetSelect
        value={country?.label}
        placeholder={t('select_country')}
        onPress={() => countrySheetReference.current?.snapToIndex(1)}
        label={t('what_country_do_you_live_in')}
      />
      {country?.code === 'US' && (
        <AppBottomSheetSelect
          value={country_state?.label}
          placeholder={t('select_country_state')}
          onPress={() => {
            countryStateSheetReference.current?.snapToIndex(1);
          }}
          label={t('which_state_do_you_live_in')}
        />
      )}
      <Spacer />
      <AppButton
        loading={loading}
        title={t('continue')}
        disabled={
          !country?.code || (country?.code === 'US' && !country_state?.code)
        }
        onPress={handleContinue}
      />
      <AppBottomSheet ref={countrySheetReference}>
        <CountryList onSelect={value => handleSelectCountry(value)} />
      </AppBottomSheet>
      {country?.code === 'US' && (
        <AppBottomSheet ref={countryStateSheetReference}>
          <CountryStateList
            onSelect={value => handleSelectCountryState(value)}
          />
        </AppBottomSheet>
      )}
    </PageLayout>
  );
}
