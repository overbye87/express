import express from "express";
import path from "path";
import { requestTime, logger } from "./middlewares.js";
import appRouter from "./routes/app.js";
import todosRouter from "./routes/todos.js";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;
const app = express();

app.set("view engine", "ejs");
console.log(app.get("view engine"));

app.set("views", path.resolve(__dirname, "ejs"));
console.log(app.get("views"));

// middleware
//app.use(express.static(path.resolve(__dirname, "static")));

app.use(requestTime);
app.use(logger);
app.use(appRouter);
app.use(todosRouter);

// form urlencoder
const urlencodedParser = express.urlencoded({ extended: false });

app.post("/", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
