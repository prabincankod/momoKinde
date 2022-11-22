import { Request, Response } from "express";
import { prismaClient } from "../prisma/prisma";
import bcrypt from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import createMomoCampaignOnSignUp from "../helper/createMomoCampaignOnSignUp";
import createWalletOnSignUp from "../helper/createWalletOnSignup";

const signUp = async (req: Request, res: Response) => {
  const { email, password, userSlug } = req.body;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(403).send("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        userSlug,
      },
    });
    createMomoCampaignOnSignUp(user);
    createWalletOnSignUp(user);

    const token = await sign({ id: user.id, email: user.email }, "secret", {
      expiresIn: "24h",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).send("User not found");
    }
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(401).send("Incorrect password");
    }
    const token = await sign({ id: user.id, email: user.email }, "secret", {
      expiresIn: "24h",
    });
    const verified = await verify(token, "secret");

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(401).send("something went wrong i guess");
  }
};

export { signUp, login };
