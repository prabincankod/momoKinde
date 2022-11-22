import { Router } from "express";
import UpdateMomoCampaign from "../controllers/campaign.controller";
import auth from "../middlewares/auth";

const campaignRoute = Router();

campaignRoute.patch("/", auth, UpdateMomoCampaign);
export default campaignRoute;
