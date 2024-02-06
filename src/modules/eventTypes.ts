import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import {
  IAllEventTypesReq,
  IAllEventTypesRes,
  ICreateEventTypeReq,
  ICreateEventTypeRes,
  IDeleteEventTypeReq,
  IDeleteEventTypeRes,
  IGetEventTypeReq,
  IGetEventTypeRes,
  IUpdateEventTypeReq,
  IUpdateEventTypeRes,
} from "src/interfaces/eventTypes";

class EventTypes {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/event_types`, apiKey);
    this.client = client;
  }

  /**
   * Create a new event type
   * @param {string} name (required) - The name of the event type
   * @param {string} serviceId (required) - The id of the service you are creating the event type for
   * */

  public create = async (name: string, serviceId: string) => {
    const response = await this.client<
      ICreateEventTypeReq,
      ICreateEventTypeRes
    >({
      data: {
        name,
        service_id: serviceId,
      },
    });

    return {
      ...response,
      data: response.data[0],
    };
  };

  /**
   * Get all the event types of a service
   * @param {string} serviceId (required) - The id of the service you want to retreive event types for
   * */

  public all = async (serviceId: string) => {
    const response = await this.client<IAllEventTypesReq, IAllEventTypesRes>({
      data: {},
      url: `?service_id=${serviceId}`,
      method: "GET",
    });

    return response;
  };

  /**
   * Get an event type by id
   * @param {string} id (required) - The id of the event type
   * */

  public get = async (id: string) => {
    const response = await this.client<IGetEventTypeReq, IGetEventTypeRes>({
      data: {},
      url: `/${id}`,
      method: "GET",
    });

    return {
      ...response,
      data: response.data[0],
    };
  };

  /**
   * Update an event type
   * @param {string} id (required) - The id of the event type
   * @param {string} name (required) - The updated name of the event type
   * */

  public update = async (id: string, name: string) => {
    const response = await this.client<
      IUpdateEventTypeReq,
      IUpdateEventTypeRes
    >({
      data: {
        name,
      },
      url: `/${id}`,
      method: "PUT",
    });

    return {
      ...response,
      data: response.data[0],
    };
  };

  /**
   * Delete an event type
   * @param {string} id (required) - The id of the event type you want to delete
   * */

  public delete = async (id: string) => {
    const response = await this.client<
      IDeleteEventTypeReq,
      IDeleteEventTypeRes
    >({
      data: {},
      url: `/${id}`,
      method: "DELETE",
    });

    return {
      ...response,
      data: response.data[0],
    };
  };
}

export default EventTypes;
