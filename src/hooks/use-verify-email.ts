import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { monitorSession } from '../store/thunks/monitor-session.thunk';
import { useFocusEffect } from '@react-navigation/native';

export const useVerifyEmail = () => {
  const dispatch = useAppDispatch();
  const { session_key, session_secret } = useAppSelector(
    state => state.session,
  );

  const [secret, setSecret] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      const reference = setInterval(() => {
        if (session_key) {
          dispatch(monitorSession(session_key))
            .unwrap()
            .then(result => setSecret(result.secret));
        }
      }, 2000);

      return () => {
        clearInterval(reference);
      };
    }, [dispatch, session_key]),
  );

  return { isEmailVerified: session_secret ? true : false, secret };
};
