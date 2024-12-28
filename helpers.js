const jwt = require("jsonwebtoken");

const getToken =  async (email, user) => {
    const payload = {
        sub: user._id,
        email: email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
};

module.exports = { getToken };
