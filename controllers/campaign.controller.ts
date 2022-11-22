import { Request, Response } from "express";
import { prismaClient } from "../prisma/prisma";

const UpdateMomoCampaign = async (req: Request, res: Response) => {
  try {
    const { campaignName, campaignDescription } = req.body;
    const momoCampaign = await prismaClient.momoCampaign.update({
      where: {
        id: parseInt(req?.id),
      },
      data: { campaignName, campaignDescription },
    });
    res.status(200).send(momoCampaign);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default UpdateMomoCampaign;
