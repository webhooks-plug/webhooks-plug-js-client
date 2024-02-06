export interface IEvent {
  id: string;
  user_id: string;
  event_type_id: string;
  event_unique_key: string;
  created_on: string;
}

export interface IPublishEventReq<M> {
  event_type_name: string;
  message: M;
  user_id: string;
}

export type IPublishEventRes = IEvent[];
