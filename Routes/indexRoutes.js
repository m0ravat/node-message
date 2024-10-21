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
module.exports = indexRouter;
