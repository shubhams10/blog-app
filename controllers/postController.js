//import models
const Post= require("../models/postModel");

//business logic
exports.createPost = async (req,res)=>{
    try{
       //fetch data
       const{title,body}=req.body;
       //create a post object
       const post= new Post({
        title,body,
       });
       //store this new post into in db
       const savedPost= await post.save();
       res.json({
        post:savedPost,
       });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post",
        });
    }
};
exports.getAllPosts= async (req,res)=>{
    try{
        const posts= await Post.find(); //.populate("likes").populate("commments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Error while fetching all post",
        });
    }
}