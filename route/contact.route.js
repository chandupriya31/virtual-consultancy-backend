import express from "express";
import { sendContactEmail } from "../app/controller/contact.controller.js";

const router = express.Router();

router.post("/emailRequest", sendContactEmail);

export default router;
