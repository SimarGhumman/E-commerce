// Import the DynamoDB client and commands from AWS SDK v3
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const ddbClient = new DynamoDBClient({ region: 'us-west-1' }); // specify your AWS region

exports.handler = async (event, context) => {
    const date = new Date();

    if (event.request.userAttributes.sub) {
        const params = {
            TableName: process.env.USERTABLE,
            Item: {
                'id': { S: event.request.userAttributes.sub },
                '__typename': { S: 'User' },
                'username': { S: event.userName },
                'email': { S: event.request.userAttributes.email },
                'createdAt': { S: date.toISOString() },
                'updatedAt': { S: date.toISOString() }
            }
        };
        
        const command = new PutItemCommand(params);

        try {
            const data = await ddbClient.send(command);
            console.log("Success", data);
        } catch (err) {
            console.error("Error", err);
        }

        console.log("Success: Everything executed correctly");
    } else {
        console.log("Error: Nothing was written to DynamoDB");
    }

    // In AWS Lambda, you do not need to call context.done() when using async function
    return event;
};
