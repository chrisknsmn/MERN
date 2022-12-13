import mongoose from "mongoose";
import { userSchema } from '../models/userModel.js';

const User = mongoose.model('User', userSchema);

export const addNewUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, User) => {
        if(err) {
            res.send(err);
        }
        // console.log('addNewUser test');
        res.json(User);
    });
};

export const getUsers = (req, res) => {
    User.find({},(err, User) => {
        if(err) {
            res.send(err);
        }
        // console.log('getUsers text');
        res.json(User);
    });
};

export const getUser = (req, res) => {
    User.findById(req.params.id,(err, User) => {
        if(err) {
            res.send(err);
        }
        // console.log('getUser test');
        res.json(User);
    });
};

export const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, User) => {
        if(err) {
            res.send(err);
        }
        // console.log('getUser test');
        res.json(User);
    });
};

export const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id},(err, User) => {
        if(err) {
            res.send(err);
        }
        // console.log('getUser test');
        res.json({message: 'deleted user'});
    });
};