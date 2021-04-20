const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/mytestprojectDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(() =>{
    console.log("Database connected sucessfully")

}).catch((err) =>{
    console.log("error in connection with database"+err)
});