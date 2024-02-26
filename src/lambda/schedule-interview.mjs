import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });


export const handler = async (event) => {
  console.debug(event);
  const {toEmail, fromEmail} = event;
  const companyName = event.companyName ?? "Company";

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Body: {
        Text: { Data: "We'd like to schedule an interview with you. What does your availability look like?" },
      },

      Subject: { Data: `${companyName} has would like to schedule an interview` },
    },
    Source: fromEmail,
  });
  
  try {
    console.log('sending email...');
    let response = await ses.send(command);
    // process data.
    return response;
  }
  catch (error) {
    // error handling.
    console.error(error);
  }
  finally {
    // finally.
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify('Schedule Interview Failed'),
  };
  return response;
};