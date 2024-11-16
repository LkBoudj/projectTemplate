import { Status } from "@/types";

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type IRegister = Omit<IUser, "id">;

export type ICredentials = Omit<IRegister, "username">;

export interface ILoginState {
  isAuthenticated: boolean;
  user: Omit<IUser, "password"> | null;
  status: Status;
  token: string | null;
  errors: string | null;
}

export interface IRegisterState {
  isAuthenticated: boolean;
  user: IRegister | null;
  status: Status;
  errors: string | null;
}
