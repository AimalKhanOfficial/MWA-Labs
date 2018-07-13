var router = require("express").Router();
var jwt = require('jsonwebtoken');
var usersRepo = require('../DAL/UsersRepo');
const { check, validationResult } = require('express-validator/check');
const { from } = require("rxjs");
const { filter } = require("rxjs/operators");


router.use('/protected', (req, res, next) => {
    var token = null;
    var bits = req.headers.authorization.split(' ');

    if (bits.length == 2) {
        var scheme = bits[0];
        var credentials = bits[1];
        if (/^Bearer$/i.test(scheme)) {
            token = credentials;
            jwt.verify(token, '@ccc%^', function (err, decoded) {
                if (err) res.status(200).json("Invalid Token");
                next();
            });
        }
    }
    else {
        res.status(401).json("Invalid Token format");
    }
});

router.get("/protected", (req, res, next) => {
    res.status(200).json(usersRepo.getUsers());
});

router.get("/:email", (req, res, next) => {
    from(usersRepo.getUsers())
        .pipe(
            filter(singleUser => singleUser.email === req.params.email)
        )
        .subscribe(singleUser => {
            return res.json("true");
        });
        res.json("false");
});

router.post("/login", [
    check('email').exists().withMessage("provide email"),
    check('email').isEmail().withMessage("provide valid email"),
    check('password').exists().withMessage("provide password")
], (req, res, next) => {
    //For Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    //Looking for Users
    from(usersRepo.getUsers())
        .pipe(
            filter(singleUser => singleUser.email === req.body.email && singleUser.password === req.body.password)
        )
        .subscribe(singleUser => {
            return res.json({
                auth: true,
                token: jwt.sign(singleUser, '@ccc%^', {
                    expiresIn: '1h'
                })
            });
        });
    res.status(200).json({
        auth: false,
        token: jwt.sign({ customStatus: "UserNotFound" }, '@ccc%^', {
            expiresIn: '1h'
        })
    });
});

router.post("/register", [
    check('firstName').exists().withMessage("provide firstName"),
    check('lastName').exists().withMessage("provide lastName"),
    check('email').exists().withMessage("provide email"),
    check('email').isEmail().withMessage("provide valid email"),
    check('password').exists().withMessage("provide password")
], (req, res, next) => {
    //For Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    }
    //Looking for Users
    usersRepo.getUsers().push(req.body);
    res.status(200).json("Registration Successful!");
});

module.exports = router;