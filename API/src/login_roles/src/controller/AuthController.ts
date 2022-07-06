import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Users } from "../entity/Users";
import  config  from "../config/config";
import * as jwt from 'jsonwebtoken';


class AuthController{
    static login = async(req: Request, res: Response)=>{
        const {username, password} = req.body;

        if (!(username && password)){
            return res.status(400).json({message: 'Username & password are required!'});
        }

        const userRepository = getRepository(Users);
        let user: Users;

        try{
                user = await userRepository.findOneByOrFail({ username });
        } catch(e){
            return res.status(400).json({message:'Username or password incorret!'})
        }

        //checkpassword
        if(!user.checkPassword(password)){
            return res.status(400).json({message: 'Username Or password are incorrect'})
        }

        const token = jwt.sign({userID: user.id, username:user.username}, config.jwtSecret,{expiresIn: '1h'})

        res.json({message: 'ok',token});
    };


}

export default AuthController;