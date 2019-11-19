module.exports = {
    validateUser
}

// function validateUser(user) {
//     let errors = [];

//     if(!user.email  ||  user.email.length < 2) {
//         errors.push('Please include a email with at least 2 characters')
//     }

//     if(!user.password || user.password.length < 4) {
//         errors.push('Please include a password with at least 4 characters.')
//     }

//     return {
//         isSuccessful: errors.length > 0 ? false : true,
//         errors
//     }
// }

function validateUser(req,res,next) {
    if(!req.body.email || !req.body.password) {
        res.status(400).json({ message: "Email & password fields are required." })
    } else {
        next();
    }
}