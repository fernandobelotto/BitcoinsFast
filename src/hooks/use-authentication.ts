import { useAppSelector } from '../store';

export const useAuthentication = () => {
  const { session_secret } = useAppSelector(state => state.session);

  return { isAuthenticated: !!session_secret };
};
