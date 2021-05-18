module.exports = (req, res, next) => {
try {
    if (!req.session.email) {
        throw 'Войдите';
    } else {
        next();
    }
} catch {
    res.status(401).send("Войдите")
}
};
