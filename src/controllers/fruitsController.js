import sequelize from "../config/database.js";
import Fruit from "../models/fruits.js";

// Syncs the model to the database — creates the "Fruits" table if it doesn't exist.
// WARNING: force: true drops and recreates the table on every restart.
// This is fine for learning. Never use it on a real production database.
sequelize.sync({ force: true }).then(() => {
  console.log("Fruits table is ready.");
});
// -------------------------------------------------------
// GET /fruits — return all fruits
// -------------------------------------------------------

// Raw SQL: SELECT * FROM "Fruits";

export const getAllFruits = async (req, res) => {
  try {
    const fruits = await Fruit.findAll();
    res.json({ message: "Fruits retrieved successfully", fruits });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------------------
// POST /fruits — add a new fruit
// -------------------------------------------------------

// Raw SQL: INSERT INTO "Fruits" (name, color, "createdAt", "updatedAt")
//          VALUES ('Mango', 'yellow', NOW(), NOW());

export const createFruit = async (req, res) => {
  try {
    const fruit = await Fruit.create({
      name: req.body.name,
      color: req.body.color,
    });

    res.status(201).json({ message: "Fruit created successfully", fruit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------------------
// GET /fruits/:id — return one fruit
// -------------------------------------------------------

// Raw SQL: SELECT * FROM "Fruits" WHERE id = <id> LIMIT 1;

export const getOneById = async (req, res) => {
  try {
    const fruit = await Fruit.findByPk(req.params.id);

    if (!fruit) {
      return res.status(404).json({ message: "Fruit nottt found" });
    }

    res.json({ message: "Fruit retrieved successfully", fruit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFruit = async (req, res) => {
  try {
    const fruit = await Fruit.findByPk(req.params.id);

    if (!fruit) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    await fruit.update({
      name: req.body.name || fruit.name,
      color: req.body.color || fruit.color,
    });

    res.json({ message: "Fruit updated successfully", fruit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------------------
// DELETE /fruits/:id — remove a fruit
// -------------------------------------------------------

// Raw SQL: DELETE FROM "Fruits" WHERE id = <id>;

// router.delete("/:id", async (req, res) => {
//   try {
//     const fruit = await Fruit.findByPk(req.params.id);

//     if (!fruit) {
//       return res.status(404).json({ message: "Fruit not found" });
//     }

//     await fruit.destroy();
//     res.json({ message: "Fruit deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
