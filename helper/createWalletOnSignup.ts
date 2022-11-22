import { User } from "@prisma/client";
import { prismaClient } from "../prisma/prisma";
/**
 *this function seeds wallet table for a user when they sign up
 *
 * @param {User} user
 */
const createWalletOnSignUp = async (user: User) => {
  await prismaClient.wallets.create({
    data: { userId: user?.id },
  });
};

export default createWalletOnSignUp;
