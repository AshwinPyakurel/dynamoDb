import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const creds = {
    region: "us-east-1",
    endpoint: "http://localhost:8000",
    accessKey: "x",
    secretAccessKey: "x"
}
const ddbClient = new DynamoDBClient(creds);

if (!ddbClient) {
    console.log("hello from dbconfig");
}

export {ddbClient};
