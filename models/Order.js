import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderid: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  },
  total: {
    type: Number,
    required: true
  },
  products: [{
    productid: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;