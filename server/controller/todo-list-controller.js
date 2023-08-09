import Todo from "../model/Todo.js"



export const getTodo = async(req,res)=>{
    try{
        const list = await Todo.find()
        return res.status(200).json(list)
    }
    catch(err){
        console.log("error")
    }
}
