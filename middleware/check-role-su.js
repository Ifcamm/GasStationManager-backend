const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.TOKEN_S);

		if (decodedToken.userRole === "superuser") {
			next();
		} else return res.status(401).json({ message: "Unauthorized" });
	} catch (err) {
		res.status(401).json({ message: "Authentication failed" });
	}
};
