import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import { IPublishEventReq, IPublishEventRes } from "src/interfaces/events";

class Events {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/events`, apiKey);
    this.client = client;
  }

  /**
   * Publish a new event
   * @param {string} eventTypeName (required) - The name of the event type
   * @param {string} userId (required) - The id of the user publishing the event
   * @param {string} message (required) - The payload of the message you are publishing
   * */

  public publish = async <M>(
    eventTypeName: string,
    userId: string,
    message: M
  ) => {
    const response = await this.client<IPublishEventReq<M>, IPublishEventRes>({
      data: {
        event_type_name: eventTypeName,
        message,
        user_id: userId,
      },
    });

    return {
      ...response,
      data: response.data[0],
    };
  };
}

export default Events;
