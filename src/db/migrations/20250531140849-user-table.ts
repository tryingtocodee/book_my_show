
import { QueryInterface } from "sequelize";
import sequelize from "../model/sequelize";

export default {
async up (queryInterface :  QueryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS User (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL ,
          password VARCHAR(255) NOT NULL ,
          email VARCHAR(255) NOT NULL UNIQUE,
          profilePic VARCHAR(255) DEFAULT "",
          userType ENUM("user" , "admin")  DEFAULT "user", 
          createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) 
      `)
  
  },

  async down (queryInterface :QueryInterface) {
  }
};
