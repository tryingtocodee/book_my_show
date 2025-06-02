import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
     CREATE TABLE IF NOT EXISTS Movie(
        id INT AUTO_INCREMENT PRIMARY KEY,
        theaterId INT,
        movieName  VARCHAR(255) NOT NULL ,
        movieDuration FLOAT NOT NULL,
        filledSeats INT DEFAULT 0,
        moviePrice INT NOT NULL,
        movieLaunchInTheater DATE NOT NULL,
        movieRemovedFromTheater DATE NOT NULL,
        FOREIGN KEY (theaterId) REFERENCES Theater(id) ON DELETE CASCADE,
        createdAT DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
     ) 
      `)
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS Movie 
      `)
  }
};
