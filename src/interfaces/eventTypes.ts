export interface IEventType {
  id: string;
  name: string;
  service_id: string;
  created_on: string;
}

export interface ICreateEventTypeReq {
  name: string;
  service_id: string;
}

export type ICreateEventTypeRes = IEventType[];

export interface IAllEventTypesReq {}

export type IAllEventTypesRes = IEventType[];

export interface IGetEventTypeReq {}

export type IGetEventTypeRes = IEventType[];

export interface IUpdateEventTypeReq {
  name: string;
}

export type IUpdateEventTypeRes = IEventType[];

export interface IDeleteEventTypeReq {}

export type IDeleteEventTypeRes = IEventType[];
