module.exports = (req, res, next) => {
try {
    if (req.session.role != "admin") {
        throw 'Вы не админ';
    } else {
        next();
    }
} catch {
    res.status(401).send("Вы не админ")
}
};