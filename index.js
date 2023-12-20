const mongoose = require('mongoose');
const config = require("./utils/config");

console.log("Connecting to MONGODB...");
mongoose.connect(config.MONGODB_URI)

.then(()=>{
    console.log("Connected to MONGODB");
})
.catch((error)=>{
    console.log("Error connecting to MONGODB:" , error.message);
});