const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://kerimii:Sarajevo1@senddatatobackend.amwzt4v.mongodb.net/")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed")
})

const schema=new mongoose.Schema({
    msg:{
        type:[mongoose.Schema.Types.Mixed],
        required:true
    }
})

const collection=new mongoose.model("newCollection",schema)

module.exports=collection
