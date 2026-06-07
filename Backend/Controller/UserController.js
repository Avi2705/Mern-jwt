import User from "../Database/schemas/UserSchema.js"

export const registerUser = async(req,res)=>{
const {Name, Email,Password} = req.body
if(!Name || !Email || !Password){
    res.status(400)
    throw new Error("Please fill all the fields")
}
const isEmail = await User.findOne({Email});
if(isEmail){
    
    throw new Error("User already exists")
}
const user = User.create({Name, Email, Password})
if(user){
    res.status(201).json({
        id: user.id,
        Name: user.Name,
        Email: user.Email
    }



);}

 else{
    res.status(500)
    throw new Error("somthing wrong")
 }
}

export const loginUser = async(req,res)=>{

    const { Email, Password} = req.body
    if(!Email || !Password){
    res.status(400)
    throw new Error("Please fill all the fields")
}

const isemail = await User.findOne({Email}) 
if(!isemail){
    throw new Error("Pleas provide the crt quries")

}

res.status(200).json({message:"Logins successfull"})
    
}

export const updateUser = async(req,res)=>{
    
}