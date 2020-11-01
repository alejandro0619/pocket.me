const mongoose = require('mongoose');
const { POCKETME_APP_MONGODB_URI } = process.env;

const MONGODB_URI = POCKETME_APP_MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))