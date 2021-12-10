const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.TOKEN_S);
		user = [decodedToken.userId];
		console.log(user);
		if (
			!user.includes(req.params.id) &&
			decodedToken.userRole !== "superuser"
		) {
			return res.status(401).json({ message: "Authentication failed" });
		}
		next();
	} catch (err) {
		res.status(401).json({ message: "Authentication failed" });
	}
};
