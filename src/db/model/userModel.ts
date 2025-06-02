import {InferAttributes , InferCreationAttributes , Model , CreationOptional, DataTypes, DATE } from "sequelize"
import sequelize from "./sequelize"

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
    declare id : CreationOptional<number>
    declare username : string 
    declare password : string
    declare email : string
    declare userType? : "user" | "admin"
    declare profilePic? : string
}

User.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    username : {type : DataTypes.STRING , allowNull : false },
    password : {type : DataTypes.STRING , allowNull :false},
    email : {type : DataTypes.STRING , allowNull : false , unique : true},
    profilePic : {type : DataTypes.STRING , defaultValue : ""},
    userType : {type : DataTypes.ENUM("user" , "admin") , defaultValue : "user"} 
}, {
    tableName : "User",
    sequelize : sequelize,
    timestamps : true
})

export default User