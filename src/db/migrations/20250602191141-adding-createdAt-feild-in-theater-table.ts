import { QueryInterface } from "sequelize";

export default{
  async up (queryInterface :QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE Theater 
       ADD COLUMN createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      ADD COLUMN updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

      `)
  },

  async down (queryInterface : QueryInterface) {
  }
};
