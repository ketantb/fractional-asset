const jwt = require('jsonwebtoken')

const userMiddleware = (req, resp, next) => {
    const token = req.headers.authorization
    try {
        if (token) {
            const { _id } = jwt.verify(token, "secretKey")
            console.log('id from middware', _id)
            if (_id) {
                req.body.userId = _id
                next();
            }
        }
        else {
            console.log('token expired, access denied')
            resp.json({ success: false, msg: 'token expired, access denied' })
        }

        req.body.userId = _id
        next();
    }
    catch (err) {
        console.log('catch: err')
        resp.json({ success: false, msg: err })

    }
}

module.exports = userMiddleware