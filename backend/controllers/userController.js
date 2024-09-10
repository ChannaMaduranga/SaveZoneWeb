import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({ success: false, message: "User Doesn't exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const  token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message:"Error"});
    }

    // try {
    //     // Check if the user exists
    //     const user = await userModel.findOne({ email });
    //     if (!user) {
    //         return res.status(400).json({ success: false, message: 'Invalid email or password' });
    //     }

    //     // Check if the password is correct
    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) {
    //         return res.status(400).json({ success: false, message: 'Invalid email or password' });
    //     }

    //     // Generate a token and send it back
    //     const token = createToken(user._id);
    //     res.status(200).json({ success: true, token });

    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, message: 'Server Error' });
    // }
};

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email' });
        }

        // Validate strong password
        if (!validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return res.status(400).json({ success: false, message: 'Please enter a stronger password' });
        }

        // Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export { loginUser, registerUser };
