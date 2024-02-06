## Webhooks Plug JS Client

This holds the code for the webhooks plug client used to connect to the server

## installation

```bash
yarn add webplug
```

## Usage

```js
import Webplug from "webplug";

const webplugClient = new Webplug({
  url: "api-gateway-url",
  apiKey: "api-key-api-gateway",
});
```

## Documentation

### Services Module

1. Create a service: `webplugClient.services.create`

```js
const service = await webplugClient.services.create("service-name");
```

&nbsp;

2. Retreive all services: `webplugClient.services.all`

```js
const services = await webplugClient.services.all();
```

&nbsp;

3. Get the details of a service: `webplugClient.services.get`

```js
const service = await webplugClient.services.get("service-id");
```

&nbsp;

4. Delete a service: `webplugClient.services.delete`

```js
const service = await webplugClient.services.delete("service-id");
```

&nbsp;

### Users Module

1. Create a user: `webplugClient.users.create`

```js
const user = await webplugClient.users.create("name-of-user", "service-id");
```

&nbsp;

2. Retreive all users: `webplugClient.users.all`

```js
const users = await webplugClient.users.all("service-id");
```

&nbsp;

3. Get the details of a user: `webplugClient.users.get`

```js
const user = await webplugClient.users.get("user-id");
```

&nbsp;

4. Delete a user: `webplugClient.users.delete`

```js
const user = await webplugClient.users.delete("user-id");
```

&nbsp;

### Subscriptions Module

1. Create a subscription: `webplugClient.subscriptions.create`

```js
const subscription = await webplugClient.subscriptions.create(
  "event-type-name",
  "endpoint-url",
  "id-of-user"
);
```

&nbsp;

2. Retreive all subscriptions for an event type: `webplugClient.subscriptions.all`

```js
const subscriptions = await webplugClient.subscriptions.all("event-type-id");
```

&nbsp;

3. Get the details of a subscription: `webplugClient.subscriptions.get`

```js
const subscription = await webplugClient.subscriptions.get("subscription-id");
```

&nbsp;

4. Delete a subscription: `webplugClient.subscriptions.delete`

```js
const subscription = await webplugClient.subscriptions.delete(
  "subscription-id"
);
```

&nbsp;

### Event Types Module

1. Create an event type: `webplugClient.eventTypes.create`

```js
const eventType = await webplugClient.eventTypes.create(
  "event-type-name",
  "service-id"
);
```

&nbsp;

2. Retreive all event types for a service: `webplugClient.eventTypes.all`

```js
const eventTypes = await webplugClient.eventTypes.all("service-id");
```

&nbsp;

3. Get the details of an event type: `webplugClient.eventTypes.get`

```js
const eventType = await webplugClient.eventTypes.get("event-type-id");
```

&nbsp;

4. Delete an event type: `webplugClient.eventTypes.delete`

```js
const eventType = await webplugClient.eventTypes.delete("event-type-id");
```

&nbsp;

### Events Module

1. Publish an event: `webplugClient.events.publish`

```js
const event = await webplugClient.events.create(
  "event-type-name",
  "user-id",
  "message-payload"
);
```
