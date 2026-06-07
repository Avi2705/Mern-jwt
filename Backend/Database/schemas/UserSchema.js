import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: (true, "please add a name")
    },
    Email:{
        type:String,
        required: (true, "please add a email"),
        unique: true
    },
    Password:{
        type:String,
        required: (true, "please add a passwrd")
    },

},
{
    timestamps:true
})

userSchema.pre("save", async function(next) {

    if (!this.isModified("Password")) {
         next();
    }

    this.Password = await bcrypt.hash(this.Password, 10);
   
});



export default mongoose.model("User", userSchema)