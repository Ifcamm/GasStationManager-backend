const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.TOKEN_S);
		user = [decodedToken.identification];
		if (!user.includes(req.params.identification)) {
			return res.status(401).json({ message: "Authentication failed" });
		}
		next();
	} catch (err) {
		res.status(401).json({ message: "Authentication failed" });
	}
};
