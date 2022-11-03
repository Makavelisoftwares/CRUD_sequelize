const {posts}=require('../models')

// show posts page
const get_postsPage=async(req,res)=>{
    try {
        const post=await posts.findAll()
        res.render('index',{posts:post})
    } catch (error) {
        res.status(400).json(error)
    }

}  
// create a single post
const create_Post=async(req,res)=>{
    const {title,body}=req.body;
    try {
        const post=await posts.create({title,body});
        res.redirect('/')
    } catch (error) {
        res.status(400).json(error)
    }
}
// show a single post 
const get_singlePost=async(req,res)=>{
    const uuid=req.params.uuid;
    try {
        const post=await posts.findOne({where:{uuid}})
        res.render('singlepost',{post})
    } catch (error) {
        res.status(400).json(error)
    }
}


// delete a single post
const delete_Post=async(req,res)=>{
    const uuid=req.params.uuid;
    try {
        const post=await posts.findOne({where:{uuid}})
        await post.destroy()
        res.redirect('/');
    } catch (error) {
        res.status(400).json(error)
    }
}
// update a single post

module.exports={
    get_postsPage,
    create_Post,
    get_singlePost,
    delete_Post
}