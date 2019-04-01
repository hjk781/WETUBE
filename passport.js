import passport from "passport";
import User from "./models/User";

passport.user(User.createStrategy());
