import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rootpass",
    database: "project_andream",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: ["src/migration/**/*.js"],
    subscribers: ["src/subscriber/**/*.js"],
    
})
