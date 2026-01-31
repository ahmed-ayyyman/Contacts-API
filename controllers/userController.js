const asyncHandler = require('express-async-handler')
const bcrypt = require("bcrypt")
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//@desc Register the user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        throw new Error("User Already Exists");
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email, createdAt: user.createdAt })
    }
    else {
        res.status(400)
        throw new Error("user data is not valid")
    }

});


//@desc Login the user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({ email });
    // Comprae password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                _id: user.id
            },

        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        )
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        throw new Error("Wrong email or password")
    }
})

//@desc Login the user
//@route POST /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})

module.exports = { registerUser, loginUser, currentUser }