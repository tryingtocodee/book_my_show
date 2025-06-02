
import { InferAttributes, InferCreationAttributes, Model, CreationOptional, DataTypes, ForeignKey } from "sequelize";
import sequelize from "./sequelize";

class MovieAssets extends Model<InferAttributes<MovieAssets>, InferCreationAttributes<MovieAssets>> {
    declare id: CreationOptional<number>
    declare movieId : ForeignKey<number>
    declare imageId: string
    declare imageUrl: string
    declare videoId: string
    declare videoUrl: string
}

MovieAssets.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    movieId : {type : DataTypes.INTEGER , references : {model : "Movie" , key : "id"}},
    imageId : {type : DataTypes .STRING , defaultValue : ""},
    imageUrl : {type : DataTypes .STRING , defaultValue : ""},
    videoId : {type : DataTypes .STRING , defaultValue : ""},
    videoUrl : {type : DataTypes .STRING , defaultValue : ""}
},{
    tableName : "TheaterAsset",
    sequelize : sequelize,
    timestamps : true
})