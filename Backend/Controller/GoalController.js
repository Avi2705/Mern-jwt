import Goal from "../Database/schemas/GoalSchema.js"
export const Getgoal = async(req,res)=>{
    const goal = await Goal.findOne()
    if(!goal){

        throw new Error("No goals");
    }
    res.status(200).json({message:"Ok", goal})
}
export const setGoal = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        res.status(400);
        throw new Error("Please fill the credentials");
    }

    const goal = await Goal.create({
        text
    });

    res.status(201).json(goal);
};

export const updateGoal = async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Id not found ")
    }
    const goalupdate = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
          
    res.status(200).json({
        message: "ok", goalupdate
    })
} 
export const deleteGoal = async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Id not found")
    }
    const goalupdate = await Goal.findByIdAndDelete(req.params.id, req.body,{new:true})
          
    res.status(200).json({
        message: "ok",  goalupdate
    })
} 