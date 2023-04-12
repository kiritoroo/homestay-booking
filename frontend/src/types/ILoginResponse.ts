import IUser from './IUser'

export default interface ILoginResponse {
  access_token: string;
  access_token_expires_at: string;
  user: IUser
}
