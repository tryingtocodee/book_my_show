import { InferAttributes , InferCreationAttributes, Model , CreationOptional, DataTypes, ForeignKey } from "sequelize";
import sequelize from "./sequelize";

class Theater extends Model<InferAttributes<Theater> , InferCreationAttributes<Theater>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number>
    declare theaterName : string
    declare theaterLocation : string
    declare theaterCity : string
    declare theaterState : string
    declare theaterPinCode : number
    declare capacity : number
}

Theater.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
    userId : {type : DataTypes.INTEGER , references : {model : "User" , key : "id"}},
    theaterName : {type : DataTypes.STRING , allowNull : false},
    theaterCity : {type : DataTypes.STRING , allowNull : false},
    theaterLocation : {type : DataTypes.STRING , allowNull : false},
    theaterPinCode : {type : DataTypes.STRING , allowNull : false},
    theaterState : {type : DataTypes.STRING , allowNull : false},
    capacity : {type : DataTypes.INTEGER , allowNull : false}
},{
    tableName : "Theater",
    sequelize : sequelize,
    timestamps : true
})

export default Theater