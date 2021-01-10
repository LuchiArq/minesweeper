const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs-then')


module.exports.jwtToken = (data) =>{
    return jwt.sign({id:data.id,name:data.name}, process.env.JWT_SECRET, {expiresIn:60*60})
}


module.exports.success = (res)=>{
    return {statusCode : 200, body: JSON.stringify(res)}
}

module.exports.error = (err)=>{
    return {
            statusCode : err.statusCode || 500, 
            body: err.message
        }
}
