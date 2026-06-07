import express from "express";
import { registerUser,loginUser } from "../Controller/UserController.js";
const router = express.Router()


router.route("/").get(registerUser).post(loginUser)
export default router;