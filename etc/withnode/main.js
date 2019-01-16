// need to set env value:PROXYURL
const request = require('request')
const HTMLParser = require('fast-html-parser')

const getElm = targetUrl => {
  'use strict'
  var ary = []

  const httpRequest = (url = 'https://www.yahoo.co.jp/') => {
    return new Promise((resolve, reject) => {
      request.defaults({ 'proxy': process.env.PROXYURL }).get(url, (error, response, body) => {
        resolve(body)
        reject(error)
      })
    })
  }

  const htmlParseGetAttrs = (body) => {
    HTMLParser.parse(body)
      .querySelectorAll('a')
      .forEach(element => {
        ary.push(element.rawAttrs)
      })
  }

  httpRequest(targetUrl)
    .then(body => {
      htmlParseGetAttrs(body)
    })
    .then(result => {
      console.log(ary)
    })
}
getElm('https://gist.github.com/taroyanaka')
