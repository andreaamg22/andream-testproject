import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { MinLength, IsNotEmpty } from "class-validator"
import * as bcrypt from 'bcryptjs'

//TODO: IsEmail

@Entity()
@Unique(['username'])
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @MinLength(6)
    username: string;

    @Column()
    @MinLength(6)
    firstname: string;

    @Column()
    @MinLength(6)
    lastname: string;

    @Column()
    @MinLength(6)
    password: string;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    birth: Date;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    hashPassword():void{
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    checkPassword(password: string):boolean{
        return bcrypt.compareSync(password, this.password);
    }

}
