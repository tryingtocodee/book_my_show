import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
     ALTER TABLE Booking 
     ADD COLUMN pricePayed INT DEFAULT 0 
      `) 
  },

  async down (queryInterface : QueryInterface) {
    
  }
};
