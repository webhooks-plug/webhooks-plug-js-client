import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import { IAllMessagesReq, IAllMessagesRes } from "src/interfaces/messages";

class Messages {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/messages`, apiKey);
    this.client = client;
  }

  /**
   * Get all messages
   * */

  public all = async () => {
    const response = await this.client<IAllMessagesReq, IAllMessagesRes>({
      data: {},
      method: "GET",
    });

    return response;
  };
}

export default Messages;
