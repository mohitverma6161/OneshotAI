const express=require('express')
const College=require('../models/college')
//const auth=require('../middleware/auth')
const router=new express.Router()

router.post('/college',async(req,res)=>{
    //const task=new Task(req.body)
    const college=new College(req.body)
    try{
        await college.save()
        res.status(201).send(college)
    }catch(e){
        res.status(400)
        res.send(e)
    }
    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((e)=>{
    //     res.status(400)
    //     res.send(e)
    // })
    
})
//GET/tasks?completed=true
//GET/tasks?limit=10&skip=0
//GET/tasks/sortBy=createdAt_asc
// router.get('/tasks',auth,async(req,res)=>{
//     const match={}
//     const sort={}

//     if(req.query.completed){
//         match.completed=req.query.completed==='true'
//     }

//     if(req.query.sortBy){
//         const parts=req.query.sortBy.split(':')
//         sort[parts[0]]=parts[1]==='desc'?-1:1
//     }

//     try{
//         //const tasks=await Task.find({owner:req.user._id})
//         await req.user.populate({
//             path:'tasks',
//             match,
//             options:{
//                 limit:parseInt(req.query.limit),
//                 skip:parseInt(req.query.skip),
//                 sort
//             }
//         }).execPopulate()
//         res.send(req.user.tasks)
//     }catch(e){
//         res.status(500).send(e)
//     }
//     // Task.find({}).then((tasks)=>{
//     //     res.send(tasks)
//     // }).catch((e)=>{
//     //     res.status(500).send(e)
//     // })
// })

router.get('/college',async(req,res)=>{
    //const _id=req.params.id

    // 
    try{
             const college=await College.find({})
             res.send(college)
         }catch(e){
             res.status(500).send(e)
         }
    //  Task.findById(_id).then((task)=>{
    //      if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(404).send()
    // })
})

// router.patch('/tasks/:id',auth,async(req,res)=>{
//     const updates=Object.keys(req.body)
//     const allowedUpdates=['description','completed']
//     const isValidOperation=updates.every((update)=>{
//         return allowedUpdates.includes(update)
//     })
//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }
    
//     try{
//         const task=await Task.findOne({_id:req.params.id,owner:req.user._id})
//         //const task=await Task.findById(req.params.id)
        
//         if(!task){
//             return res.status(404).send()
//         }
//         updates.forEach((update)=>{
//             task[update]=req.body[update]
//         })
//         await task.save()
//         res.send(task)

//     }catch(e)
//     {
//         res.status(400).send()
//     }
// })

// router.delete('/tasks/:id',auth,async(req,res)=>{
//     try{
//         //const task=await Task.findByIdAndDelete(req.params.id)
//         const task=await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }catch(e){
//         res.status(500).send()
//     }
// })

module.exports=router
