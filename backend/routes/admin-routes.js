const express =require ("express");
const { addAdmin, adminLogin, getAdmins, getAdminByID } = require( "../controllers/admin-controller");


const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);
adminRouter.get("/:id", getAdminByID);



module.exports = adminRouter;