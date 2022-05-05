const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const port = 3001;
require("./db");
app.use(express.json());
app.use(cors())

app.use("/", require("./src/routes/routes"));
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
