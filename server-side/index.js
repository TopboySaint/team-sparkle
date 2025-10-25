const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')

// Environment variable validation
const port = process.env.PORT || 8080
const uri = process.env.URI
const jwtSecret = process.env.JWT_SECRET

if (!uri) {
  console.error('Error: URI environment variable is required')
  process.exit(1)
}

if (!jwtSecret) {
  console.error('Error: JWT_SECRET environment variable is required')
  process.exit(1)
}

// Security middleware
app.use(helmet())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})
app.use(limiter)

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

const saltRounds = 10 


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['consumer', 'farmer'], required: true },
});

const userModel = mongoose.model('User', userSchema);



// Connect to MongoDB before starting the server
mongoose.connect(uri)
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.log('Error connecting to DB:', error);
    process.exit(1); // Exit if database connection fails
  });

app.post('/', (req, res)=> {
  res.status(200).json({"message": "success", "status": true})
})


app.post('/signup', async (req, res) => {
    const { name, email, password, userType } = req.body;
    
    // Input validation
    if (!name || !email || !password || !userType) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    
    if (!['consumer', 'farmer'].includes(userType)) {
        return res.status(400).json({ message: "Invalid user type" });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new userModel({ name, email, password: hashedPassword, userType });
        const savedUser = await newUser.save();
        res.status(201).json({ message: "Signup successful", user: savedUser });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: "Error during signup", error: error.message });
    }
})




app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email, role: user.userType },
            jwtSecret,
            { expiresIn: '1h' }
        );

        res.status(200).json({ 
            message: "Login successful", 
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.userType
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Error during login", error: error.message });
    }
});



// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack)
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})