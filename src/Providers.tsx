import React, { useCallback, useEffect } from 'react';
import { getValueInStorage } from './services/storage';
import { useAppDispatch } from './store';
import { setSessionSecret } from './store/slices/session.slice';

export default function AppRoutesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const checkSession = useCallback(
    async function checkStorage() {
      const session_secret = await getValueInStorage('session_secret');
      if (session_secret) {
        dispatch(setSessionSecret(session_secret));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return <>{children}</>;
}
