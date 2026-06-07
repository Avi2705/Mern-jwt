import express from "express"
import {  deleteGoal, Getgoal, setGoal, updateGoal} from "../Controller/GoalController.js"
const router = express.Router()

router.route("/").get(Getgoal).post(setGoal)
router.route("/:id").put(updateGoal).delete(deleteGoal)

// router.get("/goal", Getgoal)
// router.post("/goal", setGoal)
// router.put("/goal/:id", updateGoal)
// router.delete("/goal/:id", deleteGoal)
export default router;