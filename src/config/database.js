import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dtpcohort1db", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // change to true to see the raw SQL in your terminal
});

export default sequelize;
