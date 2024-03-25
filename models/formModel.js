import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the product schema
const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String },
  color: { type: String },
  quantity: { type: Number, required: true }
});

// Define the main order schema
const orderSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  same: { type: String, required: true },
  gift: { type: String, required: true },
  instruction: { type: String },
  shipaddress: { type: String },
  shipaddress2: { type: String },
  shipcity: { type: String },
  shipstate: { type: String },
  shipzip: { type: String },
  receivername: { type: String },
  receiverlastname: { type: String },
  giftmessage: { type: String },
  products: { type: [productSchema], required: true } // Nested product schema array
});

// Create the Mongoose model
const Order = mongoose.model('Order', orderSchema);

export default Order