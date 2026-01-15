module.exports = (express, passport) => {
  const authRouter = express.Router();

  authRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

  authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "/displayUserDetails",
      failureRedirect: "/",
    })
  );
  return authRouter;
};
