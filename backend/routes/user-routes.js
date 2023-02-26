const express = require ("express");
const { deleteUser, getAllUser, signup, updateUser, login } = require ("../controllers/user-controller");
const userRouter = express.Router();


userRouter.get("/", getAllUser);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);


module.exports = userRouter;      