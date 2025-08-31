const exp = require("express");
const app = exp();
const tasks = require("./routes/tasks");
const connectDb = require("./database/connect");
//to overwrite port value in powershell : $env:PORT=5000; node app.js
//in cmd set PORT=5000 && node app.js
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv").config();
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
//Middleware setup
//Passing the json content provided by client to our req.body
app.use(exp.json());
//For the specified path using the 'use' middleware we are connecting the router 'tasks'
app.use("/api/v1/tasks", tasks);
//Passing in the statis files (html,css...)
app.use(exp.static("./public"));
//Custom 404 error handler
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server is running on PORT", PORT);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
