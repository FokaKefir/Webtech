const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User'); 
const Category = require('./models/Category'); 
const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();

// Connect to MongoDB using the URI from the .env file
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Password regex pattern
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// Routes
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/register', async (req, res) => {
    const { username, email, password, 'confirm-password': confirmPassword } = req.body;

    // Check if password matches the regex
    if (!passwordRegex.test(password)) {
        return res.send('Password must be at least 8 characters long and contain at least one letter and one number.');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.send('Passwords do not match.');
    }

    // Check if email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.send('Email or username already exists.');
    }

    const user = new User({ username, email, password, role: 'user' });
    await user.save();

    // Save user information in session
    req.session.userId = user._id;
    req.session.userRole = user.role;
    res.redirect('/dashboard');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
        return res.send('Invalid email or password');
    }

    // Save user information in session
    req.session.userId = user._id;
    req.session.userRole = user.role;
    res.redirect('/dashboard');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/dashboard');
        }

        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});

app.get('/dashboard', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    try {
        // Fetch categories from the database
        let categories = await Category.find({});
        const allCategories = categories;
        
        // Get the selected category from the request query
        const selectedCategory = req.query.category;

        if (selectedCategory) {
            categories = await Category.find({ name: `${selectedCategory}` }, {});
        } 

        // Render the dashboard with the user's role, categories, and filtered articles
        res.render('dashboard', { userRole: req.session.userRole, categories, selectedCategory, allCategories });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.send('Error fetching data.');
    }
});

// Increase quantity route
app.post('/increase-quantity', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const { articleId } = req.body;

    try {
        await Category.updateOne(
            { "subcategories.articles._id": articleId },
            { $inc: { "subcategories.$[].articles.$[article].quantity": 1 } },
            { arrayFilters: [{ "article._id": articleId }] }
        );
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error increasing quantity:', error);
        res.send('Error increasing quantity.');
    }
});

// Decrease quantity route
app.post('/decrease-quantity', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const { articleId } = req.body;

    try {
        await Category.updateOne(
            { "subcategories.articles._id": articleId },
            { $inc: { "subcategories.$[].articles.$[article].quantity": -1 } },
            { arrayFilters: [{ "article._id": articleId }] }
        );
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error decreasing quantity:', error);
        res.send('Error decreasing quantity.');
    }
});

// Make an order
app.post('/order', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const { articleId } = req.body;
    const userId = req.session.userId;
    
    console.log(`User: ${userId} made an order for the article: ${articleId}`)

    res.redirect('/dashboard');
});


// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        const ext = path.extname(originalname);
        const uniqueFilename = `${uuidv4()}${ext}`;
        cb(null, uniqueFilename);
    }
});

const upload = multer({ storage: storage });

app.get('/receipts', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    if (req.session.userRole !== 'admin') {
        return res.redirect('/dashboard');
    }

    try {
        // Fetch list of files from the uploads directory
        const uploadDirectory = path.join(__dirname, 'uploads');
        const files = await fs.promises.readdir(uploadDirectory);

        // Render the receipts page with the list of files
        res.render('receipts', { files });
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).send('Error fetching files.');
    }
});

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    res.status(200).send('File uploaded successfully.');
});

app.get('/receipts/list', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const uploadDirectory = path.join(__dirname, 'uploads');

    fs.readdir(uploadDirectory, (err, files) => {
        if (err) {
            console.error('Error listing files:', err);
            return res.status(500).send('Error listing files.');
        }

        res.render('receipts', { files });
    });
});

app.get('/receipts/download/:filename', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);

    res.download(filePath, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            return res.status(500).send('Error downloading file.');
        }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
