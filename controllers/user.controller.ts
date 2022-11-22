import { compare, hash } from "bcryptjs";
import { Request, Response } from "express";
import { prismaClient } from "../prisma/prisma";

const updatePassword = async (req: Request, res: Response) => {
  try {
    let { currentPassword, newPassword } = req.body as {
      currentPassword: string;
      newPassword: string;
    };

    const user = await prismaClient.user.findUnique({
      where: {
        id: parseInt(req.id),
      },
    });

    // @ts-ignore
    const matchedPassed = compare(currentPassword, user?.password);

    if (!matchedPassed) {
      return res.status(400).json({
        message: "Password does not match",
      });
    }

    const password = await hash(newPassword, 10);

    const update = await prismaClient.user.update({
      where: { id: user?.id },
      data: { password },
      /*
      include: {
        user: {
          select: {
            email: true,
            userSlug: true,
          },
        },
      },
      */
    });

    res.status(200).send(update);
  } catch (error) {
    res.status(400).send(error);
  }
};
const updateUserSlug = async (req: Request, res: Response) => {
  try {
    const { userSlug } = req.body;
    const user = await prismaClient.user.update({
      where: {
        id: parseInt(req?.id),
      },
      data: { userSlug },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { updatePassword, updateUserSlug };
