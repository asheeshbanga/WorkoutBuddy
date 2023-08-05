const User = require('../models/userModel');

//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'Login User'});
};

//signup user
const signupUser = async (req, res) => {

    const {email, password} = req.body;
    
    try {
        const user = await User.signup(email, password); //fire the signup function
        res.status(200).json({email, user}); //return the json on success
    } catch (error) {
        res.status(400).json({error: error.message}); // return an error message if there's an error
    }

};

module.exports = { signupUser, loginUser };