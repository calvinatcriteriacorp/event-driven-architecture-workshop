# event-driven-architecture-workshop

## Objectives
- Practice working with AWS cli
- Setup AWS resources
- work with EventBridge events and buses
- work with SES 
- work with Lambda
- create a Pub/Sub pattern
- work with CDK
- work with CloudFormation
- trace events

## Exercise: 

You will create a Mini Applicant Tracking System (ATS) using an event-driven architecture in AWS. You will need to handle the following steps in a hiring pipeline: 

1. Send Assessment 
2. Schedule interview 
3. Send offer letter 


### 1. Send Assessment 
This will be a lambda function that uses CDK to call SES to send an invitation link to the candidate. 

### 2. Schedule Interview with idempotency 
This will be a lambda function that uses CDK to call SES to send a generic calendar invite. 

### 3. Send Offer Letter 
This will be a lambda function that sends the candidate an offer letter.

### 4. Create Event Bridge Bus to route events to all the lambdas 
Create your own named bus so your events do not mix with other people’s events. 
You will publish events on Event Bridge to emulate an API request. 

#### Notes and Tips: 
Review CloudWatch logs and enable X-Ray to trace events. 

### 5. Duplicate your AWS resources into a CloudFormation template to deploy the stack. 

 

### Bonus:  
Create a custom flow for Insight Partners by updating the event bus to direct events to a new lambda function for insights based on event filtering. 

Insight does not want candidates to receive emails. Instead, Insights wants to receive a list of names and event ids to hand out to candidates during their on-site testing event. 

### Bonus #2: 
Create a UI to trigger the different events in the ATS stages. 

## Additional Resources: 

Event Driven Architecture Overview: https://serverlessland.com/event-driven-architecture/intro 

 
## Additional workshops: 

ServerlEsspresso https://workshop.serverlesscoffee.com/ 

AWS workshop https://catalog.us-east-1.prod.workshops.aws/workshops/63320e83-6abc-493d-83d8-f822584fb3cb/en-US  