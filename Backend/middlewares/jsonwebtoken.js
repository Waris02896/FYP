const JWT = require('jsonwebtoken');

exports.jwtToken = (Option) => {
    return new Promise((resolve, reject) => {
        const payload = {};

        const secret = process.env.SESSION_SECRET;

        let options = {
            expiresIn: "6h",
            issuer: process.env.BASEURL,
            audience: Option.userid
        }

        JWT.sign(payload, secret, options, (error, token) => {
            if (error) {
                throw reject(error);

            } else if (token) {
                resolve(token);
            }
        })

    });
}

