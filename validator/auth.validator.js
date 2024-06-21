const {body} = require("express-validator")

const loginValidator = () =>[
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isLength({min:6,max:20}).withMessage("password must be more than 6 and less than 20 characters "),
]

module.exports = {
    loginValidator
}
