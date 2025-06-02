import { QueryInterface } from "sequelize";
export default {
  async up (queryInterface : QueryInterface) { 
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS Booking(
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId INT ,
        theaterId INT,
        movieId INT ,
        idempotencyKey VARCHAR(255) NOT NULL UNIQUE,
        bookingStatus ENUM('pending' , 'cancel' , 'confirm') DEFAULT 'pending',
        notificationSent BOOLEAN DEFAULT false,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE,
        FOREIGN KEY (theaterId) REFERENCES Theater(id) ON DELETE CASCADE,
        FOREIGN KEY (movieId) REFERENCES Movie(id) ON DELETE CASCADE
      ) 
      `)
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
     DROP TABLE IF EXISTS Booking 
      `)
  }
};
