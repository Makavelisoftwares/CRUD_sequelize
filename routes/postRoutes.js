const Router=require('express').Router()
const controller=require('../controllers/postController');

// show post page  
Router.get('/',controller.get_postsPage);
// create a single post
Router.post('/posts',controller.create_Post);
// show a single post 
Router.get('/posts/:uuid',controller.get_singlePost)
// delete a single post
Router.delete('/:uuid',controller.delete_Post);

// update a single post



module.exports=Router;