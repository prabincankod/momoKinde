import { Request, Response } from "express";

const updateWallet = async (req: Request, res: Response) => {
  //TODO: update wallet
  res.json({ message: "updateWallet" });
};

export default updateWallet;
