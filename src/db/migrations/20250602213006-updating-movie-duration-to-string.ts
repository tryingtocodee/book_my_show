import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface ) {
    await queryInterface.sequelize.query(`
        ALTER TABLE Movie
        MODIFY COLUMN movieDuration VARCHAR(255) NOT NULL

      `)
  },

  async down (queryInterface : QueryInterface ) {
  }
};
