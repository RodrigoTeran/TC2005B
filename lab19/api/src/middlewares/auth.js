const middleware = {};

middleware.isAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirec("/login");
    }
    return next();
};

middleware.isAdmin = (req, res, next) => {
    console.log("req.user:", req.session.user);
    if (!req.session.user) {
        return res.redirect("/");
    }
    if (!req.session.user.is_admin) {
        return res.redirect("/");
    }
    return next();
};

module.exports = middleware;