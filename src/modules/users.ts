import { AxiosFunction, makeAPICall } from "src/config/api";
import { IWebplugConstructor } from "src/interfaces/base";
import {
  IAllUsersReq,
  IAllUsersRes,
  ICreateUserReq,
  ICreateUserRes,
  IDeleteUserReq,
  IDeleteUserRes,
  IGetUserReq,
  IGetUserRes,
} from "src/interfaces/users";

class Users {
  private client: AxiosFunction;

  constructor({ url, apiKey }: IWebplugConstructor) {
    const client = makeAPICall(`${url}/users`, apiKey);
    this.client = client;
  }

  /**
   * Create a new user
   * @param {string} name (required) - The name of the user
   * @param {string} serviceId (required) - The id of the service you want to add the user to
   * */

  public create = async (name: string, serviceId: string) => {
    const response = await this.client<ICreateUserReq, ICreateUserRes>({
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
   * Get all users of a service
   * @param {string} serviceId (required) - The id of the service you want to retreive users for
   * */

  public all = async (serviceId: string) => {
    const response = await this.client<IAllUsersReq, IAllUsersRes>({
      data: {},
      url: `?service_id=${serviceId}`,
      method: "GET",
    });

    return response;
  };

  /**
   * Get a user by id
   * @param {string} id (required) - The id of the user you want to get
   * */

  public get = async (id: string) => {
    const response = await this.client<IGetUserReq, IGetUserRes>({
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
   * Delete a user
   * @param {string} id (required) - The id of the user you want to delete
   * */

  public delete = async (id: string) => {
    const response = await this.client<IDeleteUserReq, IDeleteUserRes>({
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

export default Users;
