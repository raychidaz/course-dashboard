// Use CommonJS require below so we can dynamically import during build run-time.
if (process.env.NODE_ENV === "PRODUCTION") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
