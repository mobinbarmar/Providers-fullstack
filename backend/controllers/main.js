exports.home = (req, res) => {
    res.render('index', {title: 'The MEAN Stack Agency'})
}

exports.about = (req, res) => {
    res.render('about')
}

exports.contact = (req, res) => {
    res.render('contact')
}

exports.login = (req, res) => {
    res.render('login')
}

exports.register = (req, res) => {
    res.render('register')
}

exports.forgetpassword = (req, res) => {
    res.render('forget-password')
}