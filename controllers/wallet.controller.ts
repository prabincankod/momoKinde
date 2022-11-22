import { Request, Response } from "express";
import { prismaClient } from "../prisma/prisma";

const updateWallet = async (req: Request, res: Response) => {
  //TODO: update wallet

  const updatedWallet = await prismaClient.wallets.update({
    where: {
      userId: req.id,
    },
    data: {
      esewaQr: req.body?.esewaQr,
      khaltiQr: req.body?.khaltiQr,
      IMEPayQr: req.body?.IMEPayQr,
    },
  });
};

export default updateWallet;
