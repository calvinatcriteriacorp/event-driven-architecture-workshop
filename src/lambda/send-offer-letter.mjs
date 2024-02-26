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
        Text: { Data: "Welcome to the team. We are excited to extend an offer to you for the position you applied for. Please confirm and we hope to hear from you soon." },
      },

      Subject: { Data: `Congrats! ${companyName} has sent you an offer letter` },
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
    body: JSON.stringify('Send Offer Letter Failed'),
  };
  return response;
};