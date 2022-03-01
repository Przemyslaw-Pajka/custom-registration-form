const errorMessages = {
    email: 'Email exists',
    phone: 'Phone number exists',
}

const checkSomeDataExistsInDB = (dataFromUser, dataDB) => {
    let errorMessagesObject = {}
    const isDataFromUserRepeating = dataDB.some((item) => {
        const isPhoneRepeating = dataFromUser.phone === item.phone
        const isEmailRepeating = dataFromUser.email === item.email

        if (isPhoneRepeating || isEmailRepeating) {
            return true
        }
        return false;
    })

    const isDBContainsUsers = dataDB.length > 0

    if (isDBContainsUsers) {
        dataDB.forEach((item) => {
            for (const [key, value] of Object.entries(item)) {
                if (value === dataFromUser[key]) {
                    errorMessagesObject[key] = errorMessages[key]
                }
            }
        })
        Object.keys(errorMessagesObject).forEach(key => {
            if (errorMessagesObject[key] === undefined) {
                delete errorMessagesObject[key];
            }
        });
    }
    return [isDataFromUserRepeating, errorMessagesObject]
}

module.exports = checkSomeDataExistsInDB;