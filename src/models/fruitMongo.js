import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const FruitMongo = mongoose.model("Fruit", fruitSchema);

export default FruitMongo;
