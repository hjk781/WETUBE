import express from "express";
import routes from "../routes";
import { posRegisterView } from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, posRegisterView);

export default apiRouter;
