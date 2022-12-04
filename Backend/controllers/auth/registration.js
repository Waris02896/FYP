let user = require("../../data/models/Auth/users");
const db = require("../../utils/database_connection");
const bcrypt = require('bcryptjs');
const { verified } = require("../../data/models/Auth/users");
const { _sendMail } = require("../../utils/send_email");
const mail = require("../../data/models/Auth/mail");


exports.signup = async (req, res) => {
    user = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [user.email], async (error, result) => {
        if (error) {
            return res.json({
                data: {
                    data: {
                        message: `${user.email} not found`
                    },
                    message: error
                }
            });
        } else if (result.length >= 1) {
            return res.status(200).json({
                data: {
                    message: "User already registered"
                }
            });
        } else if (result.length <= 0) {

            db.query('SELECT user_id FROM users', async (error, result) => {
                if (error) {

                    return res.json({
                        data: {
                            data: {
                                message: "Users are empty"
                            },
                            message: error
                        }
                    });
                } else if (result) {

                    let num = result.length.toString();
                    user.user_id = `${user.firstname.substring(0, 3)}-${user.lastname.substring(0, 3)}-${num.toString().padStart(4, '0')}`;
                    user.verified = 0;

                    let password = await bcrypt.hash(user.password, process.env.SALT);
                    user.password = password;

                    user.pic = "abcd"

                    db.query('INSERT INTO users SET ?', {
                        user_id: user.user_id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        password: user.password,
                        phone: user.phone,
                        pic: user.pic
                    }, (error, result) => {
                        if (error) {
                            return res.json({
                                data: {
                                    data: {
                                        message: "Connection failed please try again"
                                    }
                                },
                                message: error
                            });
                        } else if (result) {

                            mail.to = user.email;
                            mail.subject = "Verification for FYP Management System";
                            mail.body = `${process.env.BASEURL}fyp/verifyaccount?id=${user.user_id}`;
                            _sendMail(mail)
                            return res.status(200).json({
                                data: {
                                    data: {
                                        result,
                                        user,
                                        message: "User created successfully. Verification mail sent to your email address"
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    })
}