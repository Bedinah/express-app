import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Fruit = sequelize.define("Fruit", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Fruit;
