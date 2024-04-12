const mongoose = require('mongoose');

const MONGO_URI ="mongodb+srv://shreya:Rini1234@cluster0.mc2wzcs.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"


const connectDb = async()=>{
const connection = await mongoose.connect(MONGO_URI);
if(connection){
    console.log('Database is successfully connected');
}
else{
    console.log("Database connection failed");
}
}

module.exports = {connectDb};