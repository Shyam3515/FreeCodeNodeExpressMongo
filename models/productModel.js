//We haave created this model, to save our data into the database, we have created a schema and then a model using that schema
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "Product name is required"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

//creating model
const product = mongoose.model("Product", productSchema);
module.exports = product;
