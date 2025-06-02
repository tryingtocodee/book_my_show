import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: "root",
    password: "MubeeN11@",
    database: "book_my_show",
    host: "127.0.0.1",
    dialect: 'mysql',
})
export default sequelize