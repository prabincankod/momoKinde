import { Router } from "express";
import updateWallet from "../controllers/wallet.controller";

const walletRoutes = Router();

walletRoutes.patch("/", updateWallet);
export default walletRoutes;
