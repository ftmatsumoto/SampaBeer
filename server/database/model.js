const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  full_name: {type: String, required: true, unique: false},
  email: {type: String, required: true, unique: true},
  birthday: {type: Date, required: true, unique: false},
  telephone: {type: String, required: true, unique: false},
  updated: {type: Date, required: true, default: Date.now},
  indicated_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  allowed_by_spbeer: {type: Boolean, required: true, default: false},
  orders: [
    new Schema({
      _id: mongoose.Schema.Types.ObjectId,
      delivery_address: {type: String, required: true, unique: false},
      delivery_cost: {type: Number, required: true},
      delivered: {type: Boolean, required: true, default: false},
      amount_discount: {type: Number, required: false, default: 0},
      percentage_discount: {type: Number, required: false, default: 0},
      products: [
        //
        {
          product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
          quantity: {type: Number, required: true},
          price_paid: {type: Number, required: true},
          discounted: {type: Boolean, required: true, default: false}
        }
      ],
      payment_info: {
        amount: {type: Number, required: true},
        payment_method: {type: String, required: true},
        confirmed: {type: Boolean, required: true},
        confirmation_date: {type: Date, required: true}
      },
      order_created_at: {type: Date, required: true, unique: false, default: Date.now},
    })
  ],
  subscriber: {
    type_of_subscription: {type: String, required: false},
    expiration: {type: Date, required: true, default: Date.now},
    // auto_renew: {type: Boolean, required: true}
  },
  uid: { type: String }
});
let User = mongoose.model('User', userSchema);

/*
  {
    nome: 'FFF',
    preco: '15',
    tipo: 'XX',
    alcool: '10%',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dolor eu nunc aliquet blandit. Nullam consequat diam in magna egestas, at consequat tellus accumsan. Duis vehicula id metus et ornare. Sed eget egestas leo. Quisque hendrerit enim a tellus sodales, in lobortis nulla consequat. Quisque consectetur urna ligula, sed iaculis nunc scelerisque eget. Sed condimentum felis eu efficitur hendrerit. Nulla facilisi. Cras ac ex arcu.',
    volume: '600ml',
    img: 'http://via.placeholder.com/350.png'
  }
*/

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true, unique: true},
  price: {type: Number, required: true},
  beer_type: {type: String, required: true, unique: false},
  abv: {type: Number, required: true},
  ibu: {type: Number, required: true},
  description: {type: String, required: true, unique: false},
  // image: {}
});
let Product = mongoose.model('Product', productSchema);

module.exports = {
  user: User,
  product: Product
};
