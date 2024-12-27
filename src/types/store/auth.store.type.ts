export type IUserInfoState = {
  id: number;
  email: string;
  name: string;
};

export interface IAuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expiresAt: any;
  account: IUserInfoState;
}
