import BottomSheet from '@gorhom/bottom-sheet';
import { t } from 'i18next';
import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import AppBottomSheetSelect from '../../components/app-bottom-sheet-select/app-bottom-sheet-select';
import AppButton from '../../components/app-button/app-button';
import CountryList from '../../components/country-list/country-list';
import CountryStateList from '../../components/country-state-list/country-state-list';
import { Padding } from '../../components/layout/padding';
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
import { Colors } from '../../styles/colors';
import { getPlataform } from '../../utils/check-plataform';

export default function NewAccount({ navigation }: DefaultScreenProps) {
  const dispatch = useAppDispatch();

  const { i18n } = useTranslation();

  const sheetRef = useRef<BottomSheet>(null);
  const sheetRef2 = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '100%'], []);

  function handleSelectCountry(selectedCountry: CountryItemType) {
    dispatch(setCountry(selectedCountry));
    sheetRef.current?.close();
  }

  function handleSelectCountryState(selectedCountry: StateItemType) {
    dispatch(setCountryState(selectedCountry));
    sheetRef2.current?.close();
  }

  const { country, email, country_state } = useAppSelector(state => state.user);

  function handleContinue() {
    if (country && email) {
      navigation.push('VerifyEmail');
      dispatch(
        createAccount({
          language: i18n.language,
          platform: getPlataform(),
          state: country_state?.code,
          email_address: email,
          country: country?.code,
        }),
      )
        .then(() => navigation.push('VerifyEmail'))
        .catch(console.log);
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
        onPress={() => sheetRef.current?.snapToIndex(1)}
        label={t('what_country_do_you_live_in')}
      />
      {country?.code === 'US' && (
        <AppBottomSheetSelect
          value={country_state?.label}
          placeholder={t('select_country_state')}
          onPress={() => sheetRef2.current?.snapToIndex(1)}
          label={t('which_state_do_you_live_in')}
        />
      )}

      <Spacer />

      <AppButton
        title={t('continue')}
        disabled={!country?.code}
        onPress={handleContinue}
      />

      <BottomSheet
        index={-1}
        enablePanDownToClose={true}
        ref={sheetRef}
        handleStyle={styles.handle}
        backgroundStyle={styles.sheet}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}>
        <Padding>
          <CountryList onSelect={value => handleSelectCountry(value)} />
        </Padding>
      </BottomSheet>

      {country?.code === 'US' && (
        <BottomSheet
          index={-1}
          enablePanDownToClose={true}
          ref={sheetRef2}
          handleStyle={styles.handle}
          backgroundStyle={styles.sheet}
          snapPoints={snapPoints}
          handleIndicatorStyle={styles.handleIndicator}>
          <Padding>
            <CountryStateList
              onSelect={value => handleSelectCountryState(value)}
            />
          </Padding>
        </BottomSheet>
      )}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  handle: {
    paddingTop: 21,
  },
  handleIndicator: {
    backgroundColor: Colors.BLACK_10,
    width: 82,
  },
  sheet: {
    borderRadius: 18,
  },
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
