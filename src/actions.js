const fetch = require('node-fetch')

/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
async function getWeather(state, event, params) {
  const city = state.$city || 'London'
  const openWeatherMapAppId = process.env.OPEN_WEATHER_MAP_APP_ID
  const endpoint = 'http://api.openweathermap.org/data/2.5/weather'
  const { weather } = await fetch(`${endpoint}?q=${city}&APPID=${openWeatherMapAppId}&units=metric`).then(res => res.json())
  if (weather) {
    return event.reply(
      '#builtin_text',
      { text: `The weather in ${city} is: ${weather.map(item => item.description).join(', ') }` }
    )
  }
  event.reply('#builtin_text', { text: 'Wasn\'t able to fetch weather this time.' } )
}

module.exports = { getWeather }
