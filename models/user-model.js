const mongoose=require("mongoose");
const bcrypt= require("bcryptjs")
const jwt=require("jsonwebtoken")


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});


//password hashing 
 


//json webtoken
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email: this.email,
            isAdmin:this.isAdmin,

        },
        process.env.JWT_SECRECT_KEY,
        {
            expiresIn:"1d"
        }
    );
    } catch (error) {
        console.log(error);
        
    } 
}


//define the  model and collection 
const User=new mongoose.model("User", userSchema);

module.exports =User;