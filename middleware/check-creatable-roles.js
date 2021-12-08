const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.TOKEN_S);

		if (decodedToken.userRole === "superuser") {
			creatableRoles = ["user", "client"];
		} else creatableRoles = ["client"];

		if (!roles.includes(req.body.role)) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		next();
	} catch (err) {
		res.status(401).json({ message: "Authentication failed" });
	}
};
