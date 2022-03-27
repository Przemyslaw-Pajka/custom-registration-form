const fs = require('fs');
const pathToDB = 'db/data.json';
const checkSomeDataExistsInDB = require('../utils/checkSomeDataExists')
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    pathToDB
);

module.exports = class RegistrationModel {
    constructor(dataFromUser, _cb) {
        this.dataFromUser = dataFromUser;
        this.cb = _cb
    }

    register() {
        return fs.readFile(p, (err, data) => {
            if (err) throw err;
            const dataDB = JSON.parse(data)
            const [isDataFromUserRepeating, errorMessagesObject] = checkSomeDataExistsInDB(this.dataFromUser, dataDB)

            if (isDataFromUserRepeating) {
                console.log(errorMessagesObject)
                this.cb({ errorMessagesObject, isNewUserCreated: false })
            }
            else {
                const newData = [...dataDB]
                newData.push(this.dataFromUser);

                fs.writeFile(p, JSON.stringify(newData), (err) => {
                    if (err) throw err;
                });
                this.cb({ isNewUserCreated: true })
            }
        });
    }
}

