let user = require('../../data/models/Auth/users');
const bcrypt = require('bcryptjs');
const db = require('../../utils/database_connection');

exports.login = async (req, res) => {

    user = req.body;

    db.query('SELECT user_id, firstname, lastname, password, email, phone, verified, pic FROM users where email = ?', [user.email], async (error, result) => {
        if (error) {
            return res.status(error.status).json({
                data: {
                    data: {

                    },
                    error: {
                        error,
                        status: error.status || 500,
                        message: "Connection failed please try again"
                    }
                }
            });
        } else if (result.length > 0) {
            console.log(result[0].password);
            if (await bcrypt.compare(user.password, result[0].password)) {
                if (result[0].verified == 1) {
                    return res.status(200).json({
                        data: {
                            data: {
                                user: {
                                    user_id: result[0].user_id,
                                    firstname: result[0].firstname,
                                    lastname: result[0].lastname,
                                    email: user.email,
                                    phone: result[0].phone,
                                    verified: true,
                                    pic: result[0].pic
                                }
                            }
                        }
                    });
                } else if (result[0].verified == 0) {
                    return res.status(401).json({
                        data: {
                            data: {
                                user: {
                                    user_id: result[0].user_id,
                                    firstname: result[0].firstname,
                                    lastname: result[0].lastname,
                                    email: user.email,
                                    phone: result[0].phone,
                                    verified: false,
                                    pic: result[0].pic
                                },
                            },
                            error: {
                                message: "User is not verified, please verify account first\nor email lost resend mail"
                            }
                        }
                    });
                }
            } else if (!(await bcrypt.compare(user.password, result[0].password))) {
                return res.status(401).json({
                    data: {
                        data: {

                        },
                        error: {
                            message: "Password is incorrect"
                        }
                    }
                })
            }
        } else if (result.length <= 0) {
            return res.status(200).json({
                data: {
                    data: {
                        message: "User with this email is not registered"
                    }
                }
            })
        }
    });
}