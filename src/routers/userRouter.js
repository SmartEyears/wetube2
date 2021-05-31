import express from "express";

const userRouter = express.Router();

const handleUserEdit = (req, res) => res.send("User EditPage");

userRouter.get("/edit", handleUserEdit);

export default userRouter;