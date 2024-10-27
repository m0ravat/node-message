const { body, validationResult } = require("express-validator");
const messageStorage = require("../Storage/messageStorage");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

// Validation for 'username' only
const validateUsername = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username cannot be empty.")
    .isAlpha().withMessage(`Username ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Username ${lengthErr}`),
];
// userController.js
exports.usersListGet = (req, res) => {
    // Logic to retrieve and render the list of users
    // For example, it might render 'index.ejs' with user data.
    res.render('index', { title: 'User List',
         users: messageStorage.getUsers(), 
    }); // Replace '[]' with actual users if needed.
};

exports.usersCreateGet = (req, res) => {
    // Logic to render the form for creating a new user
    res.render('form', { title: 'Create User', errors: [], data: {} });
};

exports.usersCreatePost = [
    // Validation middleware here (e.g., validateUsername)
    validateUsername,
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('form', {
                errors: errors.array(),
                data: req.body, // Pre-fill form data if validation fails
            });
        }
        
        const { username, message } = req.body;
        messageStorage.addUser({ username, message });
        // Add user logic, e.g., MessageStorage.addUser({ username, message });
        
        res.redirect('/');
    }
];



