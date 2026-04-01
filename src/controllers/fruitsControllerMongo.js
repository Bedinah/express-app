import FruitMongo from "../models/fruitMongo.js";

// -------------------------------------------------------
// GET /fruits — return all fruits
// -------------------------------------------------------

// Raw SQL: SELECT * FROM "Fruits";

export const getAllFruits = async (req, res) => {
  try {
    const fruits = await FruitMongo.find();
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
    const fruit = await FruitMongo.create({
      name: req.body.name,
      color: req.body.color,
    });

    res
      .status(201)
      .json({ message: "Fruit created successfully mongo", fruit });
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
    const fruit = await FruitMongo.findById(req.params.id);

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
    const fruit = await FruitMongo.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        color: req.body.color,
      },
      { new: true }, // returns the updated document, not the old one
    );

    if (!fruit) {
      return res.status(404).json({ message: "Fruit not found" });
    }

    res.json(fruit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// -------------------------------------------------------
// DELETE /fruits/:id — remove a fruit
// -------------------------------------------------------

// Raw SQL: DELETE FROM "Fruits" WHERE id = <id>;

export const deleteFruit = async (req, res) => {
  try {
    const fruit = await FruitMongo.findByIdAndDelete(req.params.id);

    if (!fruit) {
      return res.status(404).json({ message: "Fruit not found" });
    }
    res.status(200).json({ message: "Fruit deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
