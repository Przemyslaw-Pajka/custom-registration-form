const errorMessages = {
    pesel: 'Pesel się powtarza',
    payerNumber: 'Numer płatnika się powtarza',
    email: 'Email jest już przypisany do innego konta'
}

const checkSomeDataExistsInDB = (dataFromUser, dataDB) => {
    let errorMessagesObject = {}
    const isDataFromUserRepeating = dataDB.some((item) => {
        const isPeselRepeating = dataFromUser.pesel === item.pesel;
        const isPayerNumberRepeating = dataFromUser.payerNumber === item.payerNumber
        const isEmailRepeating = dataFromUser.email === item.email

        if (isEmailRepeating || isPeselRepeating || isPayerNumberRepeating) {
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