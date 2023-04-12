import IUser from './IUser'

export default interface TUserResponse {
  access_token: string;
  access_token_expires_at: string;
  user: IUser
}