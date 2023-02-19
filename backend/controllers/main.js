exports.home = (req, res) => {
    res.render('index', {title: 'The MEAN Stack Agency'})
}

exports.about = (req, res) => {
    res.render('about', {title: 'About'})
}

exports.contact = (req, res) => {
    res.render('contact', {title: 'Contact'})
}

exports.login = (req, res) => {
    res.render('login', {title: 'Login'})
}

exports.register = (req, res) => {
    res.render('register', {title: 'Register'})
}

exports.forgetpassword = (req, res) => {
    res.render('forget-password', {title: 'Forget'})
}