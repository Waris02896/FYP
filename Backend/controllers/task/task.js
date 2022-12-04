const db = require("../../utils/database_connection")

exports.getTaskCategories = (req, res) => {
    db.query("SELECT * FROM taskCategories", async (error, result) => {
        if (error) {
            return res.json({
                data: {
                    data: {

                    },
                    error: {
                        error,
                        message: "Connection failed try again"
                    }
                }
            })
        } else if (result.length >= 1) {
            return res.status(200).json({
                data: {
                    data: {
                        task: {
                            result
                        }
                    }
                }
            })
        } else if (result.length <= 0) {
            return res.status(200).json({
                data: {
                    data: {

                    },
                    error: {
                        message: "There is no task categories available"
                    }
                }
            })
        }
    });
}