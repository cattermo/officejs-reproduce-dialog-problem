# Test Repository to reproduce bug in Officejs

## Requirements
NodeJS
Docker
Free account at https://ngrok.com 

## Getting started
We will use ngrok to simply get a hosted https url to test with.
- Copy sample.env -> .env
- Add the auth header from your ngrok account into NGROK_AUTH in the .env file
- Install dependencies with `npm install`
- Start ngrok with `docker compose up`
- Navigate to http://localhost:4040/api/tunnels and copy the https url for ngrok
- In `manifest-ngrok.xml` search for the existing ngrok url (e.g. https://affe-109-104-21-48.ngrok-free.app/) and replace it with the one from previous step
- Start the server with `npm start`
- Navigate to Microsoft365 app of choice, open a document, from File -> Get Add-ins -> Manage my Add-ins -> Upload My Add-in, add the custom `manifest-ngrok.xml`

## Reproducing the error
- Open the Add-in by clicking OfficeJS Test -> Start OfficeJS Test
- Click button "Login"
- Wait for redirect
- See error message in host page
