import { Router } from "express";
import { protect } from "../controllers/protect.js";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

const router = Router();

router.post("/", authUser);
router.post("/users", registerUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
