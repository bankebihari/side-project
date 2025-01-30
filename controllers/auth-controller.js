const User= require("../models/user-model")
const bcrypt= require("bcryptjs")
const jwt=require("jsonwebtoken")


const  home= async(req,res) =>{
    try {
        res
        .status(200)
        .send("welcome to home ")        
    } catch (error) {
        console.log(error in home );
        
        
    }
}


// registeration 

const register =async (req,res) => {
    try {
        
        //console.log(req.body);
 
        const { username, email, phone, password }= req.body;
        

        const userExist= await User.findOne({email:email});

        if(userExist){
            return res.status(400).json({msg:"email is already exist"});
        }

        //hash the password 
        const saltRound=10;
        const hash_password= await bcrypt.hash(password,saltRound);


        const userCreated= await User.create({
            username,
            email,
            phone,
            password:hash_password});
        
        console.log(req.body);
        
        res.status(200).json({
            msg:" registraion suceesful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),

        }) 
         
    } catch (error) {
        res.status(401)
        res.send("register failed");
        
    }
}

module.exports =  {home,register};