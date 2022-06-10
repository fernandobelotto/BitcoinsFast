export type LoginResponse = {
  session_secret: string;
  new_account: boolean;
  reactivation: boolean;
};
