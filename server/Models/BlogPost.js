const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
title: String,
desciption: String,
},{timestamps:true});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports ={BlogPost};