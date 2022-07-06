import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { Users } from "../entity/Users"
import { validate } from "class-validator"

export class UserController {
    static getAll = async (req: Request, res: Response)=>{
        const userRepository = getRepository(Users);
        const users = await userRepository.find();
        
        if (users.length > 0){
            res.send(users);
            
        } else{
            res.status(404).json({message:'Not result'});
        }

    };

    static getById = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const userRepository = getRepository(Users);
        try{
            const user = await userRepository.findOneOrFail(req.params);
            res.send(user);
        }catch(e){
            res.status(404).json({message:'not result'});
        }
    };

    static newUser = async (req: Request, res: Response)=>{
        const {username,password,role,firstname,lastname,dateofbirth} = req.body;
        const user = new Users();

        user.username = username;
        user.firstname = firstname;
        user.lastname = lastname
        user.password = password;
        user.role = role;
        user.birth = dateofbirth;
        

        //Validate 
        const validationopt = {validationError: {target: false, value: false}};
        const errors = await validate(user, validationopt);
        if (errors.length > 0){
            return res.status(400).json(errors);
        }

        //TODO: HASH PASSWORD

        const userRepository =  getRepository(Users);
        try{
            user.hashPassword();
            await userRepository.save(user);
        } catch(e){
            return res.status(409).json({message: 'Username already exist'});
        }
        // alll right
        res.send ('User created');

    };

    static editUser = async (req: Request, res: Response)=>{
        let user;
        const {id} = req.params;
        const {username,role} = req.body;

        const userRepository = getRepository(Users)

        //try get user

        try{
            user = await userRepository.findOneOrFail(req.params);
        }catch(e){
            return res.status(404).json({message:'User not found'})
        }

        user.username = username;
        user.role = role;
        const validationopt = {validationError: {target: false, value: false}};
        const errors = await validate(user,validationopt);
        if(errors.length > 0){
            return res.status(400).json(errors);
        }

        //try to save user

        try{
            await userRepository.save(user);
        }
        catch(e){
            res.status(201).json({message: 'Username already in use'});}

        res.status(201).json({message: 'User update'});
    };

    static deleteUser = async (req: Request, res: Response)=>{
        const {id} = req.params;
        const userRepository = getRepository(Users);
        let user: Users;

        try{
            user = await userRepository.findOneOrFail(req.params);
        
        }catch(e){
            return res.status(404).json({message: 'User Not Found' });
        }
        
        // remove user
        userRepository.delete(id);
        res.status(201).json({message: 'User deleted' });
    }

}