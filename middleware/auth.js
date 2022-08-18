function checkAuth(req,res,next){
    if(req.isAuthenticated()){
        res.locals.dashVal = '<li><a href="/login/logout">Logout</a></li>';
        res.locals.name = req.user.firstName;
    }
    else{
        res.locals.dashVal = '<li><a href="/login">Login</a></li>';
        res.locals.name = 'Guest';
    }
    return next();
}

module.exports = {checkAuth}