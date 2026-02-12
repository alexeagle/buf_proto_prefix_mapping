import * as grpc from "@grpc/grpc-js";
import getPort from "get-port";
import { GreeterService } from "@my-org/example-proto/v1/greeter";

type GetGreetingRequest = {
  name?: string;
};

type GetGreetingResponse = {
  message: string;
  featured_pet: {
    id: string;
    name: string;
    species: string;
  };
};

const handlers: grpc.UntypedServiceImplementation = {
  GetGreeting(
    call: grpc.ServerUnaryCall<GetGreetingRequest, GetGreetingResponse>,
    callback: grpc.sendUnaryData<GetGreetingResponse>,
  ) {
    const rawName = call.request?.name ?? "";
    const name = rawName.trim().length > 0 ? rawName.trim() : "friend";

    callback(null, {
      message: `Hello, ${name}!`,
      featured_pet: {
        id: "pet-1",
        name: "Mochi",
        species: "cat",
      },
    });
  },
};

function main() {
  const server = new grpc.Server();
  server.addService(greeterService.service, handlers);

  server.bindAsync(
    `0.0.0.0:${await getPort()}`,
    grpc.ServerCredentials.createInsecure(),
    (error, boundPort) => {
      if (error) {
        throw error;
      }

      console.log(`GreeterService listening on ${boundPort}`);
    },
  );
}

main();
