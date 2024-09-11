// const passport = require('passport');
const { Router } = require("express");
const router = Router();

router.use('/hello').get(
    (req, res) => {
        res.send("Working");
    }
);

module.exports = router;