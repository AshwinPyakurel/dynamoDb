import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./dbconfig.js";

export const run = async () => {
  try {
    const data = await ddbClient.send(new ListTablesCommand({}));
    console.log(data);
    // console.log(data.TableNames.join("\n"));
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();