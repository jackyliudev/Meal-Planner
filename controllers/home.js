// Controls home page view
function getIndex(req,res){
    const logValue = req.isAuthenticated() ? 
        '<li><a href="/login/logout">Logout</a></li>':
        '<li><a href="/login">Login</a></li>';
    res.render('dashboard', {
        loginStatus: logValue
    })
}


module.exports = {getIndex};