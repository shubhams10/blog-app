//import the models
const Post= require("../models/postModel");
const Like= require("../models/likeModel");
// like a post
exports.likePost= async (req,res)=>{
    try{
        const{user,post}= req.body;
        const like= new Like({
            post,user,
        });
        const savedLike = await like.save();
        const updatedPost= await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}}, {new:true});
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while liking a post",
        });
    }
}

//dislike post
exports.dislikePost= async (req,res)=>{
    try{
        const{like,post}= req.body;
        //find and delete the like from the collection 
        const dislike= await new Like.findOneAndUpdate({post:post,_id:like});
        //update the like deletion 
    const updatedPost= await Post.findByIdAndUpdate(post,{$pull: {likes: disLike._id}}, {new:true});
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while disliking a post",
        });
    }
}



exports.dummyLink = (req,res)=>{
    res.send("if you come to me, i promise you i'll show you the most beautiful love");
};