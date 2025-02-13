import express from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.json({limit: "16kb"}));

import userRouter from "./routes/user.routes";
import { verifyVerificationToken } from "./utils/users";

app.use("/api/v1/user", userRouter);

//verifications
app.get("/verify-email", verifyVerificationToken);

export {app};