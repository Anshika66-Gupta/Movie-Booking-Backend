const User = require ("../models/User");
const bcrypt = require ( "bcryptjs");

const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }
    catch(err) {
        return console.log(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    return res.status(200).json({ users });
};
// validation check for the user 
const signup  = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name && name.trim() === " " && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Input data" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    
    let user;
    try {
        user = new User({ name, email, password: hashedPassword });
        user = await user.save();
        
    } catch(err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    return res.status(201).json({ id: user._id});
};

const updateUser = async (req, res, next) => {
    
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (!name && name.trim() === " " && !email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Input data" });
    }
    let user;
    try {
        user = await User.findByIdAndUpdate(id, { name, email, password });
    } catch(errr) {
        return console.log(errr);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    res.status(200).json({
        message: "Updated Successfully"
    });
};

 const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch(err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    res.status(200).json({
        message: "Deleted Successfully"
    });
}
 const login = async (req, res, next) => { 
    const {email, password } = req.body;
    if (!email && email.trim() === "" && !password && password.trim() === "") {
        return res.status(422).json({ message: "Invalid Input data" });
    }
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch(err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "Unable to find the user from this id"});
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({ message: "login successfull" });
 }
 
const getBookingsofUser = async (req, res, next) => {
    const id = req.params.id;
    let bookings;
    try {
        bookings = await Bookings.findById({user: id});
    } catch(err) {
        return console.log(err);
    }
    if (!bookings) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    return res.status(200).json({ bookings});   
}
const getUserById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    }
    catch(err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occurred" })
    }
    return res.status(200).json({ user });
};
 
module.exports = {login, getAllUser, updateUser, deleteUser, signup, getBookingsofUser,getUserById}