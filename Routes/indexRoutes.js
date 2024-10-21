const { Router } = require('express');
const indexRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "Message" },
];
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
indexRouter.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.get('/new', (req, res) => {
    res.render("form");
});

indexRouter.post('/new', (req, res) =>{
    const messageUser = req.body.Username; // Matches the 'name' attribute in the form
    const messageText = req.body.Message;  // Matches the 'name' attribute in the for
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;
