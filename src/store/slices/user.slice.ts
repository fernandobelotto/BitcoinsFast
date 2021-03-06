import { createSlice } from '@reduxjs/toolkit';
import { CountryItemType } from '../../constants/countries';
import { StateItemType } from '../../constants/usa-states';
import { createAccount } from '../thunks/create-account.thunk';

interface UserState {
  email: string | null;
  country: CountryItemType | null;
  country_state: StateItemType | null;
  loading: boolean;
}

const initialState: UserState = {
  email: null,
  country: null,
  country_state: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setCountryState: (state, action) => {
      state.country_state = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createAccount.fulfilled, state => {
        state.loading = false;
      })
      .addCase(createAccount.pending, state => {
        state.loading = true;
      })
      .addCase(createAccount.rejected, state => {
        state.loading = false;
      });
  },
});

export const { setCountry, setCountryState, setEmail } = userSlice.actions;
export const UserReducer = userSlice.reducer;
