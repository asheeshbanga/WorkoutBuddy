const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create token function
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' } ) // payload, secret, options
}

//login user
const loginUser = async (req, res) => {

    const {email, password} = req.body;

    try {
        const user = await User.login(email, password); //fire the signup function

        // create a token
        const token = createToken(user._id);

        res.status(200).json({email, token}); //return the json on success
    } catch (error) {
        res.status(400).json({error: error.message}); // return an error message if there's an error
    }
};

//signup user
const signupUser = async (req, res) => {

    const {email, password} = req.body;
    
    try {
        const user = await User.signup(email, password); //fire the signup function

        // create a token
        const token = createToken(user._id);

        res.status(200).json({email, token}); //return the json on success
    } catch (error) {
        res.status(400).json({error: error.message}); // return an error message if there's an error
    }

};

module.exports = { signupUser, loginUser };