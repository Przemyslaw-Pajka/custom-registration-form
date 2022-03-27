const RegistrationModel = require('../models/RegistrationModel')

exports.postRegisterData = (req, res, next) => {
    const cb = (response) => {
        res.send(JSON.stringify(response))
    }
    const dataFromUser = req.body
    const registrationModel = new RegistrationModel(dataFromUser, cb);

    registrationModel.register(cb)
};