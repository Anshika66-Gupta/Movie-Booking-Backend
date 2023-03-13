const Admin = require("../models/Admin");
const bcrypt = require ("bcryptjs");
const jwt = require( "jsonwebtoken");

const addAdmin = async (req, res, next) => {
    const { email, password } = req.body;
    
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
        
    }
    catch (err) {
        return next(err);
    }
    if (existingAdmin) {
        return res.status(400).json({ message: "Admin already exists" });
    }
    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({ email, password:hashedPassword });
        admin = await admin.save();
    }
    catch (err) {
        return next(err);
    }
    if (!admin) { 
        return request.status(500).json({ message: "Unable to create/store admin" })   
    }
    return res.status(201).json({ message: "Admin created successfully" });
};

const adminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Input data" });
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
    }
    catch (err) {
        return next(err);
    }
    if (!existingAdmin) {
        return res.status(401).json({ message: "Admin not found" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingAdmin.password
    );
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: existingAdmin._id }, process.env.SECRET_KEY, {
        expiresIn: "7d",
    })
    return res.status(200).json({ message: "Login successful", token, id: existingAdmin._id });
};

const getAdmins = async (req, res, next) => {
    let admins;
    try {
        admins = await Admin.find();
    }
    catch (err) { 
        return next(err);
    }
    if (!admins) {
        return res.status(500).json({ message: "Unable to get admins" });
    }
    return res.status(200).json(admins);
    
}
const getAdminByID = async (req, res, next) => {
    const id = req.params.id;
    let admin;
    try {
        admin = await Admin.findById(id).populate("addedMovies");
    } catch (err) {
        return console.error(err);
    }
    
    if (!admin) {
        return console.log("Cannot find Admin");
        
    }
    
    return res.status(200).json({ admin })
};





module.exports = {addAdmin, adminLogin, getAdmins, getAdminByID}