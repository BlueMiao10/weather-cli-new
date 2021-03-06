#!/usr/bin/env node
const getWeather = require('weather23')

if (process.argv[2] === '--help') {
  console.log(`
    Usage:
      weather <cityName>

    Example:
      weather 北京
  `)
} else {
  let city = process.argv[2]
  getWeather(city)
    .then(data => {
      console.log('当前城市：' + data.result.location.name)
      console.log('邮编 ：' + data.result.location.id)
      console.log('天气概况：')
      console.log(' 天气： ' + data.result.now.text)
      console.log(' 舒适等级： ' + data.result.now.temp)
      console.log(' 风向： ' + data.result.now.wind_dir)
      console.log(' 风力： ' + data.result.now.wind_class)
    })
    .catch(err => {
      console.log(err)
    })
}