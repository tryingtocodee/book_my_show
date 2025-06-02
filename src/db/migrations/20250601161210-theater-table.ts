
import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface )  {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS Theater(
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId INT,
        theaterName VARCHAR(255) NOT NULL,
        theaterLocation VARCHAR(255) NOT NULL,
        theaterCity VARCHAR(255) NOT NULL,
        theaterState VARCHAR(255) NOT NULL,
        theaterPinCode INT NOT NULL,
        capacity INT NOT NULL,
        FOREIGN KEY (userId) REFERENCES USER(id) ON DELETE CASCADE
      ) 
      `)
  },

  async down (queryInterface : QueryInterface )  {
      await queryInterface.sequelize.query(`
          DROP TABLE IF EXISTS Theater
        `)
  }
};
