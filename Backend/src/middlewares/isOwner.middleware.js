// Middleware to check if the user is the owner of the resource

function isOwner(req,res,next){
    if(req.user.id != req.params.id){
        return res.status(403).json({
            success:false,
            message:"Action interdite."
        });
    }
    next();
}