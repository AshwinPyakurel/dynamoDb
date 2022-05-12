import { BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./dbconfig.js";

// Set the parameters
export const params = {
  RequestItems: {
    "TEST_TABLE": {
      Keys: [
        {
            ID: { N: 1  },
            ID: { N: 2 },
        },
      ],
      ProjectionExpression: "ATTRIBUTE_NAME",
    },
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new BatchGetItemCommand(params));
    console.log("Success, items retrieved", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();