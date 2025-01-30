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
        
        console.log(req.body);
        res
        .status(200).json({message: Request.body})
         
    } catch (error) {
        res.status(401)
        res.send("register failed");
        
    }
}

module.exports =  {home,register};