const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser = require("body-parser")

// Your routing code goes here

router.get('/blog', async (req,res)=>{
    try{
        var result
        const { page= 1, search = ""} = req.query
        if(result == ""){
            result = await Blog.find().skip((page-1)*5).limit(5) 
        } else{
            result = await Blog.find({topic: search}).skip((page-1)*5).limit(5)             
        }
        res.json({
            status: "success",
            result 
        })
    }catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.post("/blog", async (req, res)=>{
    try{
        const blog = await Blog.create(req.body)
        res.json({
            status: "success",
            blog
        })
    }catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.put("/blog/:id", async (req, res)=>{
    try{
        await Blog.updateOne({_id: req.params.id}, req.body)
        const blog = await Blog.findOne({_id: req.params.id})
        res.json({
            status: "success",
            blog
        })
    }catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.delete("/blog/:id", async (req, res)=>{
    try{
        const blog = await Blog.deleteOne({_id: req.params.id})
        res.json({
            status: "success",
            blog
        })
    }catch(e){
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;