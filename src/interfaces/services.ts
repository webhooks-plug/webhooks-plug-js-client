export interface IService {
  id: string;
  name: string;
  created_on: string;
}

export interface ICreateServiceReq {
  name: string;
}

export type ICreateServiceRes = IService[];

export interface IAllServicesReq {}

export type IAllServicesRes = IService[];

export interface IAllServicesUsersCountReq {}

export type IAllServicesUsersCountRes = { count: number }[];

export interface IGetServiceReq {}

export type IGetServiceRes = IService[];

export interface IDeleteServiceReq {}

export type IDeleteServiceRes = IService[];
