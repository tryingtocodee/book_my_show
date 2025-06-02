import { InferAttributes , InferCreationAttributes , Model , CreationOptional, ForeignKey, DataTypes } from "sequelize";
import sequelize from "./sequelize";

class Movie extends Model<InferAttributes<Movie> , InferCreationAttributes<Movie>>{
    declare id : CreationOptional<number>
    declare theaterId : ForeignKey<number>
    declare movieName : string
    declare movieDuration : string
    declare filledSeats : number
    declare moviePrice : number 
    declare movieLaunchInTheater : Date
    declare movieRemoveFromTheater : Date
}

Movie.init({
        id : {type : DataTypes.INTEGER , autoIncrement : true , primaryKey : true},
        theaterId : {type : DataTypes.INTEGER , references : {model : "Theater", key : "id"}},
        movieName : {type : DataTypes.STRING , allowNull : false },
        movieDuration : {type : DataTypes.FLOAT , allowNull : false },
        filledSeats : {type : DataTypes.INTEGER , defaultValue : 0 },
        moviePrice : {type : DataTypes.INTEGER , allowNull : false},
        movieLaunchInTheater : {type : DataTypes.DATE , allowNull : false},
        movieRemoveFromTheater : {type : DataTypes.DATE , defaultValue : null}
},{
    tableName : "Movie",
    sequelize : sequelize,
    timestamps : true
})

export default Movie