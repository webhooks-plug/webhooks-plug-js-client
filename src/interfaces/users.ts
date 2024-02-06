export interface IUser {
  id: string;
  name: string;
  service_id: string;
  created_on: string;
}

export interface ICreateUserReq {
  name: string;
  service_id: string;
}

export type ICreateUserRes = IUser[];

export interface IAllUsersReq {}

export type IAllUsersRes = IUser[];

export interface IGetUserReq {}

export type IGetUserRes = IUser[];

export interface IDeleteUserReq {}

export type IDeleteUserRes = IUser[];
