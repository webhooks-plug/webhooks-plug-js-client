export interface ISubscription {
  id: string;
  eventTypeName: string;
  endpointUrl: string;
  created_on: string;
}

export interface ICreateSubscriptionReq {
  url: string;
  event_type_name: string;
  user_id: string;
}

export type ICreateSubscriptionRes = ISubscription[];

export interface IAllSubscriptionsReq {}

export type IAllSubscriptionsRes = ISubscription[];

export interface IAllSubscriptionsUserReq {}

export type IAllSubscriptionsUserRes = {
  id: string;
  endpointUrl: string;
  eventTypeName: string;
  nameOfUser: string;
}[];

export interface IGetSubscriptionReq {}

export type IGetSubscriptionRes = ISubscription[];

export interface IUpdateSubscriptionReq {
  name: string;
}

export type IUpdateSubscriptionRes = ISubscription[];

export interface IDeleteSubscriptionReq {}

export type IDeleteSubscriptionRes = {
  id: string;
  deleted_on: string;
}[];
