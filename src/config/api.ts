import axios, { AxiosHeaders } from "axios";

interface IAxiosRequest<V> {
  data?: V;
  apiKey?: string;
  url?: string;
  method?: "POST" | "PUT" | "GET" | "PATCH" | "DELETE";
}

export interface IResponse<Res> {
  data: Res;
  status: number;
  message: string;
  error: any;
}

export type AxiosFunction = <Req, Res>(
  props: IAxiosRequest<Req>
) => Promise<IResponse<Res>>;

const myHeaders = new AxiosHeaders();

myHeaders.set("Content-Type", "application/json");

const requestObject = <V>({
  data,
  url,
  apiKey,
  method = "POST",
}: IAxiosRequest<V>) => {
  if (apiKey) {
    myHeaders.set("x-api-key", apiKey);
  }

  const basicRequestOptions = {
    data,
    method,
    headers: myHeaders,
    url,
  };

  return basicRequestOptions;
};

const makeAPICall =
  (url: string, apiKey: string) =>
  async <Req, Res>(props: IAxiosRequest<Req>) => {
    const response = await axios<IResponse<Res>>(
      requestObject({
        ...props,
        url: `${url}${props.url ? props.url : ""}`,
        apiKey,
      })
    );

    return {
      data: response.data.data,
      message: response.data.message,
      error: response.data.error,
      status: response.data.status || response.status,
    };
  };

export { makeAPICall };
