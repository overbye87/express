import express from "express";
import path from "path";
import { requestTime, logger } from "./middlewares.js";
import todosRoutes from "./routes/todos.js";

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
app.use(todosRoutes);
app.use("/about", function (request, response) {
  response.redirect("/features");
});
app.use("/user", function (request, response) {
  let id = request.query.id;
  let userName = request.query.name;
  response.send(
    "<h1>Информация</h1><p>id=" + id + "</p><p>name=" + userName + "</p>"
  );
});

app.get("/", (req, res) => {
  res.render("index", { title: "Main page", active: "main" });
});

app.get("/features", (req, res) => {
  res.render("features", { title: "Features page", active: "features" });
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});
