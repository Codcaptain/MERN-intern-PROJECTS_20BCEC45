const mongoose=require('mongoose');
exports.dbConn=async()=>{
    try{
    const dbURL="mongodb+srv://meenakshimohapatra:minakshi077@cluster0.nijgeuf.mongodb.net/productdb?retryWrites=true&w=majority"
    await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log(`database connected`);
    }catch(err){
        console.log(`database connection error ${err.message}`);
    }
}