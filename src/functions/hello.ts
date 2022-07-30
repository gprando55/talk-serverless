import { Handler } from "aws-lambda";


export const handler: Handler = async (
  event,context
) => {
 console.log("event", {event, context})

  return {statusCode: 200, body: '{"helo": "world"}'}
};

export default handler;