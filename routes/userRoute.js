import { registerUser, getUserDataById, updateuserinfo, deleteUser } from "../controllers/userController.js";

import express from "express";

const router = express.Router();


router.post("/register",registerUser);
router.get("/getUser/:id", getUserDataById);
router.patch("/updateUser/:id", updateuserinfo);
router.delete("/deleteUser/:id", deleteUser);

export default router;