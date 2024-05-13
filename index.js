const express = require("express");
const path = require("path");
const http = require("http");
const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(process.cwd(), "public"), {
  setHeaders: (res) => {
    res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
  }
}));

app.set("view engine", "hbs");
app.set("views", [path.join(process.cwd(), "views"), path.join(process.cwd(), "public")]);

app.use("/api/login",(req, res) => {
  res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
  res.render("login", {url: "https://google.com"})
});

const server = http.createServer(app);

server.listen(3001, () => console.info(`Listening on port 3001`));
