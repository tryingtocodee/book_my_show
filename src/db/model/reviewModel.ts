import { InferAttributes , InferCreationAttributes , Model , CreationOptional, DataTypes, ForeignKey } from "sequelize";
import sequelize from "./sequelize";

class Review extends Model <InferAttributes<Review> , InferCreationAttributes<Review>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number> 
    declare movieId : ForeignKey<number> 
    declare starRating : number
    declare comment : string 
    declare avgRating : number
}

Review.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    userId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}},
    movieId : {type : DataTypes.INTEGER , references : {model : "Movie" , key : "id"}},
    starRating : {type : DataTypes.INTEGER , allowNull : false , validate : {min : 1 , max : 5}},
    comment : {type : DataTypes.STRING , defaultValue : ""},
    avgRating : {type : DataTypes.FLOAT , defaultValue : 0.0}
},{
    tableName : "Review",
    sequelize : sequelize,
    timestamps : true
})