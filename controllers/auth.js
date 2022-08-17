const passport = require('passport');

// Controls login page view
function getLogin(req,res){
    res.render('login',{
        layout: 'login',
    })
}

// Controls auth with google
function loginWithGoogle(req, res, next){
    passport.authenticate('google', {scope: ['profile', 'email']})(req, res, next);
}

// Google Auth Call back
function gAuthCallBack(req, res, next){
    passport.authenticate('google', {failureRedirect:'/login'})(req, res, next);
}

// Google Auth Redirect
function gAuthRedirect(req, res){
    res.redirect('/');
}

// Logout
function getLogout(req, res){
    req.logout((err)=>{
        if(err){console.error(err)}
        res.redirect('/');
    })
}

module.exports = {getLogin, 
                loginWithGoogle, 
                gAuthCallBack, 
                gAuthRedirect, 
                getLogout};