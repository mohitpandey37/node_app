const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/new_project", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('I am Darkseid.');
}).catch((err)=>{
console.log('err' ,err);
})