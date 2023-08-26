import { Router } from "express";
const router = Router();

import * as controller from "../controllers//appController.js";
import Auth from "../middleware/auth.js";
import { localVariable } from "../middleware/auth.js";
import { registerMail } from "../controllers/sentMailer.js";
/** POST METHODS */
router.route("/register").post(controller.register); // register user
router.route("/registerMail").post(registerMail); // send the email
router
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route("/login").post(controller.verifyUser, controller.login); // login in app

//** GET METHODS */

router.route("/user/:username").get(controller.getUser); // user with username
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariable, controller.generateOTP); // generate random OTP
router.route("/verifyOTP").get(controller.verifyUser, controller.verfiyOTP); // verify generated OTP
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables

//** PUT METHODS */

router.route("/updateUser").put(Auth, controller.updateUser); // is use to update the user profile
router
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;
