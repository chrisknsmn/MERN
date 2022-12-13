import { 
    addNewUser, 
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const routes = (app) => {
    app.route('/users')
    //GET ENDPOINT
    .get(getUsers)
    //POST ENDPOINT
    .post(addNewUser);

    app.route('/user/:id')
        //Get by id
        .get(getUser)
        //Update
        .put(updateUser)
        //Update
        .delete(deleteUser);
}


export default routes;