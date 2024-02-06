import { IWebplugConstructor } from "./interfaces/base";
import Users from "./modules/users";
import Services from "./modules/services";
import EventTypes from "./modules/eventTypes";
import Subscriptions from "./modules/subscriptions";
import Events from "./modules/events";
import Messages from "./modules/messages";

class Webplug {
  private url: string;
  private apiKey: string;
  public services: Services;
  public users: Users;
  public eventTypes: EventTypes;
  public subscriptions: Subscriptions;
  public events: Events;
  public messages: Messages;

  constructor({ url, apiKey }: IWebplugConstructor) {
    if (!url || !apiKey) {
      throw new Error("Url and Api Key is required. Please provide both.");
    }

    this.url = url;
    this.apiKey = apiKey;

    const config = {
      url: this.url,
      apiKey: this.apiKey,
    };

    this.services = new Services(config);
    this.users = new Users(config);
    this.eventTypes = new EventTypes(config);
    this.subscriptions = new Subscriptions(config);
    this.events = new Events(config);
    this.messages = new Messages(config);
  }
}

if (window) {
  (window as any).Webplug = Webplug;
}

export default Webplug;
