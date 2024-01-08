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
        console.log("TRING AGAIN");
        db();
                                                                    
    });//connecting mongo -> THE NAME OF WHAT WE WILL LOOK FOR IN MONGO

}
db();


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
