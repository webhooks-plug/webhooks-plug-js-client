import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import {
  IAllSubscriptionsReq,
  IAllSubscriptionsRes,
  IAllSubscriptionsUserReq,
  IAllSubscriptionsUserRes,
  ICreateSubscriptionReq,
  ICreateSubscriptionRes,
  IDeleteSubscriptionReq,
  IDeleteSubscriptionRes,
  IGetSubscriptionReq,
  IGetSubscriptionRes,
} from "src/interfaces/subscriptions";

class Subscriptions {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/subscriptions`, apiKey);
    this.client = client;
  }

  /**
   * Create a new subscription
   * @param {string} eventTypeName (required) - The name of the event type
   * @param {string} endpointUrl (required) - The url of the endpoint you want to subscribe
   * @param {string} userId (required) - The id of the user who is subscribing the endpoint
   * */

  public create = async (
    eventTypeName: string,
    endpointUrl: string,
    userId: string
  ) => {
    const response = await this.client<
      ICreateSubscriptionReq,
      ICreateSubscriptionRes
    >({
      data: {
        user_id: userId,
        event_type_name: eventTypeName,
        url: endpointUrl,
      },
    });

    return {
      ...response,
      data: response.data[0],
    };
  };

  /**
   * Get all subscriptions for an event type
   * @param {string} eventTypeId (required) - The id of the event type
   * */

  public all = async (eventTypeId: string) => {
    const response = await this.client<
      IAllSubscriptionsReq,
      IAllSubscriptionsRes
    >({
      data: {},
      url: `?event_type_id=${eventTypeId}`,
      method: "GET",
    });

    return response;
  };

  /**
   * Get all subscriptions for a user
   * @param {string} userId (required) - The id of the user
   * */
  public allForUser = async (userId: string) => {
    const response = await this.client<
      IAllSubscriptionsUserReq,
      IAllSubscriptionsUserRes
    >({
      data: {},
      url: `?user_id=${userId}`,
      method: "GET",
    });

    return response;
  };

  /**
   * Get a subscription by id
   * @param {string} id (required) - The id of the subscription
   * */

  public get = async (id: string) => {
    const response = await this.client<
      IGetSubscriptionReq,
      IGetSubscriptionRes
    >({
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
   * Delete a subscription by id
   * @param {string} id (required) - The id of the subscription
   * */

  public delete = async (id: string) => {
    const response = await this.client<
      IDeleteSubscriptionReq,
      IDeleteSubscriptionRes
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

export default Subscriptions;
