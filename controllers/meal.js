// Controls meals index view
function getIndex(req,res){
    res.render('mealindex', {
        loginStatus: res.locals.dashVal,
        name: res.locals.name
    })
}


module.exports = {getIndex};