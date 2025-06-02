import { InferAttributes , InferCreationAttributes , Model , CreationOptional, ForeignKey, DataTypes  } from "sequelize";
import sequelize from "./sequelize";

class Booking extends Model <InferAttributes <Booking> , InferCreationAttributes<Booking>>{
    declare id : CreationOptional<number>
    declare userId : ForeignKey<number>
    declare theaterId : ForeignKey<number>
    declare movieId : ForeignKey<number>
    declare idempotencyKey : string
    declare bookingStatus : "pending" | "cancelled" | "confirm"
    declare notificationSent : boolean
}

Booking.init({
    id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true },
    userId : {type : DataTypes.INTEGER , references  : {model : "User" , key : "id"}},
    theaterId : {type : DataTypes.INTEGER , references : {model : "Theater" , key :"id"}},
    movieId : {type : DataTypes.INTEGER , references : {model : "Movie", key : "id"}},
    idempotencyKey : {type : DataTypes.STRING , allowNull : false , unique : true },
    bookingStatus : {type : DataTypes.ENUM("pending" , "cancel" , "confirm") , defaultValue : "pending"},
    notificationSent : {type : DataTypes.BOOLEAN , defaultValue : false}
},{
    tableName : "Booking",
    sequelize : sequelize,
    timestamps : true
})

export default Booking