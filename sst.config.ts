import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";
import { ApiStack } from "./stacks/ApiStack";
import { StorageStack } from "./stacks/StorageStack";
import { AuthStack } from "./stacks/AuthStack";

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(StorageStack)
      .stack(ApiStack)
      .stack(AuthStack)
      .stack(FrontendStack);
  },
} satisfies SSTConfig;
