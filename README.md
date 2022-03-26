This is a project that allows you to place automated phone calls to a target of your choice.

It is a proof of concept that is intended to be used for good.
Please be responsible.

## Getting Started
You must have a funded twilio account setup with a phone number.
Once you know your twilio account sid, auth token, and phone number, create a `.env` file in the top level directory. The contents should be
```
TWILIO_ACCOUNT_SID=YOUR_TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN
YOUR_TWILIO_NUMBER=YOUR_TWILIO_PHONE_NUMBER
```
Then you can build the app in the docker container
```
docker build -t fun-dialer .
docker run -d -p80:80 fun-dialer
```

Then put `localhost` into your browser and that should do it.

![fun-dialer](https://user-images.githubusercontent.com/5093063/160253799-8f0d68a5-4ec2-493f-9cd8-d9a9badd5437.png)
