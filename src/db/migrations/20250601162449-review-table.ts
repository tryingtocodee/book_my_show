import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS Review(
      id INT AUTO_INCREMENT PRIMARY KEY,
      userId INT,
      movieId INT,
      starRating INT NOT NULL CHECK (starRating <= 1  AND starRating >= 5 ),
      comment VARCHAR(255) DEFAULT " ",
      avgRating FLOAT DEFAULT 0.0,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE,
      FOREIGN KEY (movieId) REFERENCES Movie(id) ON DELETE CASCADE
      )
      `)
  },


  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
       DROP TABLE IF EXISTS Review 
      `)
  }
};
