import { User } from "@prisma/client";
import { prismaClient } from "../prisma/prisma";
/**
 *
 *
 * @param {User} user
 * @description This function creates a momo campaign for a user when they sign up
 */
const createMomoCampaignOnSignUp = async (user: User) => {
  await prismaClient.momoCampaign.create({
    data: { userId: user?.id },
  });
};

export default createMomoCampaignOnSignUp;
