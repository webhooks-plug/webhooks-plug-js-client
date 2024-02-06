import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import {
  IAllServicesReq,
  IAllServicesRes,
  IAllServicesUsersCountReq,
  IAllServicesUsersCountRes,
  ICreateServiceReq,
  ICreateServiceRes,
  IDeleteServiceReq,
  IDeleteServiceRes,
  IGetServiceReq,
  IGetServiceRes,
} from "src/interfaces/services";

class Services {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/services`, apiKey);
    this.client = client;
  }

  /**
   * Create a new service
   * @param {string} name (required) - The name of the service
   * */

  public create = async (name: string) => {
    const response = await this.client<ICreateServiceReq, ICreateServiceRes>({
      data: {
        name,
      },
    });

    return {
      ...response,
      data: response.data[0],
    };
  };

  /**
   * Get number of users for a service
   * */

  public usersCount = async (id: string) => {
    const response = await this.client<
      IAllServicesUsersCountReq,
      IAllServicesUsersCountRes
    >({
      data: {},
      url: `/${id}?count=true`,
      method: "GET",
    });

    return response;
  };
  /**
   * Get all services
   * */

  public all = async () => {
    const response = await this.client<IAllServicesReq, IAllServicesRes>({
      data: {},
      method: "GET",
    });

    return response;
  };

  /**
   * Get a service by id
   * @param {string} id (required) - The id of the service you want to get
   * */

  public get = async (id: string) => {
    const response = await this.client<IGetServiceReq, IGetServiceRes>({
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
   * Delete a service by id
   * @param {string} id (required) - The id of the service you want to delete
   * */

  public delete = async (id: string) => {
    const response = await this.client<IDeleteServiceReq, IDeleteServiceRes>({
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

export default Services;
