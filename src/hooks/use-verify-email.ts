import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { monitorSession } from '../store/thunks/monitor-session.thunk';
import { useFocusEffect } from '@react-navigation/native';

export const useVerifyEmail = () => {
  const dispatch = useAppDispatch();
  const { session_key, session_secret } = useAppSelector(
    state => state.session,
  );

  useFocusEffect(
    useCallback(() => {
      const reference = setInterval(() => {
        if (session_key) {
          dispatch(monitorSession(session_key));
        }
      }, 2000);

      return () => {
        clearInterval(reference);
      };
    }, [dispatch, session_key]),
  );

  return { isEmailVerified: session_secret ? true : false, session_secret };
};
