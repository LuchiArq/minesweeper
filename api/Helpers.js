const jwt = require('jsonwebtoken');


module.exports.jwtToken = (data) =>{
    return jwt.sign({id:data.id,name:data.name}, process.env.JWT_SECRET, {expiresIn:60*60*24})
}

module.exports.success = (res)=>{
    return {
            statusCode : 200, 
            body: JSON.stringify(res),
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials':true,
                'Access-Controll-Allow-Headers': 'Authorization'
            }
        }
}

module.exports.error = (err)=>{
    return {
            statusCode : err.statusCode || 500, 
            message: err.message,
        }
}
