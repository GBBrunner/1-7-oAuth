const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const passportConfig = require("./config/passport.config");
const authRoutes = require("./routes/auth.routes");

const app = express();

configureServer();
passportConfig(passport);
createRoutes();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

function isLoggedIn(req, res, next) {
  req.user ? next() : res.redirect("/");
}

function configureServer() {
  app.set("views", "./views");
  app.set("view engine", "pug");

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
}
function createRoutes() {
  app.use("/auth", authRoutes(express, passport));

  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/displayUserDetails", isLoggedIn, (req, res) => {
    res.render("userDetails", { user: req.user });
  });

  app.get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) next(err);
      console.log(req.user);
      res.redirect("/");
    });
  });
}
