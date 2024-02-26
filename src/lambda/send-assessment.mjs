import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });


export const handler = async (event) => {
    console.debug(event);
    const { toEmail, fromEmail } = event.detail;
    const companyName = event.companyName ?? "Company";

    const command = new SendEmailCommand({
        Destination: {
            ToAddresses: [toEmail],
        },
        Message: {
            Body: {
                Text: { Data: "You've been invited to take an assessment." },
            },

            Subject: { Data: `${companyName} has invited you to take an assessment` },
        },
        Source: fromEmail,
    });

    console.log('sending email...');
    let response = await ses.send(command);

    return response;

};
