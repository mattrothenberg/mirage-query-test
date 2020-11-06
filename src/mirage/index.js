import { createServer, Model } from "miragejs";

export function startMirage(environment = "development") {
  return createServer({
    environment,
    models: {
      todo: Model,
    },
    seeds(server) {
      server.createList("todo", 5);
    },
    routes() {
      this.namespace = "api";
      this.resource("todo");
    },
  });
}
