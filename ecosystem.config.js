require('babel-register')({
   presets: [ 'env' ]
})


module.exports = {
   apps : [{
      name: "app",
      script: "./app.js",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/error.log",
      out_file: "./logs/access.log",
      env: {
         NODE_ENV: "development",
      },
      env_production: {
         NODE_ENV: "production",
      }
   }]
}