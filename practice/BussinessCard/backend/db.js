require('dotenv').config();
const
    mongoose = require('mongoose');

//Todo schema
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
db = async () => {
    await mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connected");
    }).catch(err => {
        console.log('ERROR', err.message);
    });//connecting mongo -> THE NAME OF WHAT WE WILL LOOK FOR IN MONGO

}
db();


const CardSchema = mongoose.Schema({
    name : String,
    description : String,
    email: String,
    linkedinID: String,
    twitterID: String,
    interests: [String],
});

const card = mongoose.model('card', CardSchema);
module.exports = {
    card
}
