// Import required AWS SDK clients and commands for Node.js
import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./dbconfig.js";

// Set the parameters
export const params = {  
  TableName: "TEST_TABLE", //TABLE_NAME
  Key: {
    ID: { N: 2  },    
  },  
};

export const run = async () => {
  const data = await ddbClient.send(new DeleteItemCommand(params));
  console.log(data);
  console.log("Success", data.Item);
  return data;
  
};
run();