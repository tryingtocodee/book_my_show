
import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS TheaterAsset(
        id INT AUTO_INCREMENT PRIMARY KEY,
        theaterId INT,
        imageId VARCHAR(255) DEFAULT " " ,
        imageUrl VARCHAR(255) DEFAULT " ",
        videoId VARCHAR(255) DEFAULT " ",
        videoUrl VARCHAR(255) DEFAULT " ",
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (theaterId) REFERENCES Theater(id) ON DELETE CASCADE
      ) 
      `
    )
  },


  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXISTS TheaterAsset
      `)
  }
};
