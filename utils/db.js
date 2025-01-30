const { default: mongoose } = require("mongoose")

//const URI="mongodb+srv://bankebihari1206:C4BrSm91tjGbltQP@cluster0.wi1t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//mongoose.connect(URI);

const URI=process.env.MONGODB_URI
const connectDb =async () => {
    try {
        await mongoose.connect(URI);
        
        console.log("db is connected");
          
        
    } catch (error) {
        console.log(" db connection fail");
        
        
    }
}
module.exports =connectDb;