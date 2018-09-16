const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");
const app = express();
const datastore = new nedb({
  fileName: "tips.db",
  autoload: true
});


const restApi = rest();
restApi.addDatastore('tip', datastore);
app.use(cors());
app.use('/', restApi);
app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port 5000");

});
