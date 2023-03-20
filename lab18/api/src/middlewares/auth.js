const middleware = {};

middleware.isAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirec("/login");
    }
    return next();
};

module.exports = middleware;