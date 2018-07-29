## Run bot

1. Run `yarn` to install dependencies.
2. Set up Google-Assistant (see below)
3. Run `OPEN_WEATHER_MAP_APP_ID=<XXXXXXXXXXXXX> yarn start` to start your bot.

By default bot runs locally with web interface available at http://localhost:3000

## Setting up Google Assistant

To set up google-assistant and DialogFlow accounts you can follow a guide in the first part of video.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=WZY_in9oAjA
" target="_blank"><img src="http://img.youtube.com/vi/WZY_in9oAjA/0.jpg" 
alt="Google Analytics setup instructions" width="240" height="180" border="10" /></a>

You don't want to set up Firebase-app, but to point an app to your server.
Webhook URL is `/api/botpress-channel-ga`. You can use `ngrok` or similar in development to make your webserver available from the internet.

Also you need to set up "What's the weather now?" intent at Google DialogFlow and edit default fallback intent to send a request to a webhook rather then responding with predefined text.

## Deploy

Check [Heroku](https://botpress.io/docs/deploy/heroku/) and [AWS](https://botpress.io/docs/deploy/aws/) deploy tutorials to get started

## Development

To learn more on how to work with [Botpress](https://botpress.io/) you can read [here](https://botpress.io/docs/getting_started/).
## Demo

<a href="http://www.youtube.com/watch?feature=player_embedded&v=z74UOPW4Bzc
" target="_blank"><img src="http://img.youtube.com/vi/z74UOPW4Bzc/0.jpg" 
alt="Google Analytics setup instructions" width="240" height="180" border="10" /></a>
