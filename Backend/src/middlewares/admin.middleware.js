// admin.middleware.js

function isAdmin(req, res, next) {

    if(req.user.role !== "admin"){

        return res.status(403).json({
            success:false,
            message:"Accès interdit."
        });

    }

    next();

}

module.exports = isAdmin;