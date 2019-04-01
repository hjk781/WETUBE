import passport from "passport";
import GithybStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controller/userControllers";

passport.use(User.createStrategy());

passport.use(
  new GithybStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback"
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
