// SERVER

// const CONFIG = {
//   headless: true,
//   api: {
//     host: '127.0.0.1',
//     port: 3000,
//   },
//   ui: {
//     ssl: true,
//     host: 'candlestick.alexrowan.net',
//     port: 443,
//     path: '/'
//   },
//   adapter: 'sqlite'
// }
//
// if(typeof window === 'undefined')
//   module.exports = CONFIG;
// else
//   window.CONFIG = CONFIG;



// DEV
const CONFIG = {
  headless: false,
  api: {
    host: '127.0.0.1',
    port: 3000,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: 'localhost',
    port: 3000,
    path: '/'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
