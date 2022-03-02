const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs');
const checkSomeDataExistsInDB = require('./utils/checkSomeDataExists');
const hostname = '127.0.0.1'
const port = 5000;
const pathToDB = './db/data.json'

app.use(cors())
app.use(express.json());
app.listen(port, hostname, () => {
    console.log(`Server listening on port ${port}!`);
});

app.post('/send', (req, res) => {
    const dataFromUser = req.body

    fs.readFile(pathToDB, 'utf8', (err, data) => {
        if (err) throw err;
        const dataDB = JSON.parse(data)
        const [isDataFromUserRepeating, errorMessagesObject] = checkSomeDataExistsInDB(dataFromUser, dataDB)

        if (isDataFromUserRepeating) {
            res.send(JSON.stringify({ errorMessagesObject, isNewUserCreated: false }))

            return false;
        }
        else {
            const newData = [...dataDB]
            newData.push(dataFromUser);

            fs.writeFile(pathToDB, JSON.stringify(newData), (err) => {
                if (err) throw err;
            });
            res.send({ isNewUserCreated: true })
        }
    });
});

