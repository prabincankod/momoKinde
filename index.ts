import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { prismaClient } from "./prisma/prisma";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import campaignRoute from "./routes/campaignRoutes";
import walletRoutes from "./routes/walletRoutes";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/campaign", campaignRoute);
app.use("/wallet", walletRoutes);

app.get("/", async (req: Request, res: Response) => {
  // const data = await prismaClient.momoCampaign.findMany();
  // res.send(data);
  res.status(200).json({ message: "alive" });
});

app.get("/u/:slug", async (req: Request, res: Response) => {
  const { slug } = req.params;
  const data = await prismaClient.user.findUnique({
    where: {
      userSlug: slug,
    },
    select: { wallet: true, campaign: true, userSlug: true },
  });
  // res.status(200).send(JSON.parse(JSON.stringify(data)).campaign);
  // console.log(data);
  res.status(200).send(data);
});

app.listen(port, () => {
  console.log(`💻[server]: Server is running at http://localhost:${port}`);
});
