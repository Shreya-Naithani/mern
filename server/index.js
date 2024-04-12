const express = require('express');
const cors =require('cors');
const app =express();
const {connectDb} = require('./connection');
const{BlogPost} =require('./Models/BlogPost');
const PORT =5000;


//connect Database
connectDb();

//middlewares
app.use(express.json());
app.use(cors());

//route1
app.post('/post-blogs', async(req , res)=>{

    let blog = new BlogPost({
        title : req.body.title,
        desciption : req.body.desciption
    })
    await blog.save();

res.json({message : "Blog post saved successfully",blog});
})
//route2
app.get('/get-blogs',async(req,res)=>{
const blog = await BlogPost.find()
if(!blog){
    res.status(404).json({message:"No Blogs found"});
}
else{
    res.status(200).json({blog});
}
})
//route3
app.delete('/delete-blog/:id',async(req,res)=>{
let blog = await BlogPost.findByIdAndDelete(req.params.id);
if(!blog){
    req.status(404).json({message:"No blog found"});
}
else{
res.status(200).json({message :"Blog deleted successfully"});
}
})
//route4
app.put('/update-blog/:id',async(req,res)=>{
let blog = await BlogPost.findByIdAndUpdate(req.params.id);
if(!blog){
    res.status(404).json({message:"no blog found"})
}

if(!req.body.title && !req.body.desciption){
    res.json({message:"Please enter title and description"})
}
else if(!req.body.title){
   blog.desciption =req.body.desciption;
}
else if(!req.body.desciption){
    blog.title =req.body.title;
 }
 else{
    blog.title =req.body.title;
    blog.desciption = req.body.desciption;
 }
 await blog.save();
 res.status(200).json({message :"Blog updated successfully"});
})





//listen server
app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`);
})