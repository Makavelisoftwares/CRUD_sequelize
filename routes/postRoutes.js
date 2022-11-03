const Router=require('express').Router()
const controller=require('../controllers/postController');

// show post page  
Router.get('/',controller.get_postsPage);
// create a single post
Router.post('/posts',controller.create_Post);

// show create page
Router.get('/create',controller.create_get);
// show a single post 
Router.get('/posts/:uuid',controller.get_singlePost)
// delete a single post
Router.delete('/:uuid',controller.delete_Post);

// update get a single post
Router.get('/post/:uuid',controller.update_get);

// update post single post 
Router.put('/:uuid',controller.post_update);



module.exports=Router;