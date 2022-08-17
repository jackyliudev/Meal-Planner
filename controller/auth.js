// Controls login page view
function getLogin(req,res){
    res.render('login',{
        layout: 'login',
    })
}


module.exports = {getLogin};