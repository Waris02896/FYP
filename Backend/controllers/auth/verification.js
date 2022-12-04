const db = require("../../utils/database_connection");

exports.verifyemail = (req, res) => {
    const id = req.query.id;

    db.query('SELECT user_id, verified FROM users WHERE user_id = ?', [id], async (error, result) => {
        if (error) {
            return res.json({
                data: {
                    data: {

                    },
                    error: {
                        message: "Connection failed please try again",
                        error
                    }
                }
            })
        } else if (result.length > 1) {
            return res.status(207).json({
                data: {
                    data: {

                    },
                    error: {
                        message: "Id contains multiple registeration"
                    }
                }
            })
        } else if (result.length <= 0) {
            return res.status(200).json({
                data: {
                    data: {

                    },
                    error: {
                        message: "No user available to verify"
                    }
                }
            })
        } else if (result[0].verified == "1") {
            return res.status(200).json({
                data: {
                    data: {
                        message: "Your account is already verified"
                    }
                }
            })
        }
        else if (result.length == 1) {
            db.query('UPDATE users SET ? where ?', [{ verified: 1 }, { user_id: id }], async (error, result) => {
                if (error) {
                    return res.status(408).json({
                        data: {
                            data: {
                            },
                            error: {
                                message: "Connection timeout please try again",
                                error
                            }
                        }
                    })
                } else if (result) {

                    return res.status(200).json({
                        data: {
                            data: {
                                message: "Your account successfully verified"
                            }
                        }
                    })
                }
            })
        }
    })
}