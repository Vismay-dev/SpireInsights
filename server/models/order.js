const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    resolved: {
      type: Boolean,
      required: true,
    },
    confirmedEmail: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: true,
    },
    userDetails: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
