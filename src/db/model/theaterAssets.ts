import { InferAttributes, InferCreationAttributes, Model, CreationOptional, DataTypes, ForeignKey } from "sequelize";
import sequelize from "./sequelize";

class TheaterAsset extends Model<InferAttributes<TheaterAsset>, InferCreationAttributes<TheaterAsset>> {
    declare id: CreationOptional<number>
    declare theaterId: ForeignKey<number>
    declare imageId: string
    declare imageUrl: string
    declare videoId: string
    declare videoUrl: string
}

TheaterAsset.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    theaterId : {type : DataTypes.INTEGER , references : {model : "Theater" , key : "id"}},
    imageId : {type : DataTypes .STRING , defaultValue : ""},
    imageUrl : {type : DataTypes .STRING , defaultValue : ""},
    videoId : {type : DataTypes .STRING , defaultValue : ""},
    videoUrl : {type : DataTypes .STRING , defaultValue : ""}
},{
    tableName : "TheaterAsset",
    sequelize : sequelize,
    timestamps : true
})