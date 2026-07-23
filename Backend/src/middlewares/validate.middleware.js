// validate.middleware.js

function validateRegister(req,res,next){

    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    if(!firstName || !lastName || !email || !password){

        return res.status(400).json({
            success:false,
            message:"Tous les champs sont obligatoires."
        });

    }

    next();

}

module.exports = validateRegister;