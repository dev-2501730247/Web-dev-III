require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-204', category: 'Furniture', price: 5499, quantity: 15, reorderLevel: 5, supplier: 'Godrej' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-101', category: 'Electronics', price: 54999, quantity: 3, reorderLevel: 5, supplier: 'Dell' },
  { name: 'Wireless Mouse', sku: 'ELEC-MS-220', category: 'Electronics', price: 799, quantity: 45, reorderLevel: 15, supplier: 'Logitech' },
  { name: 'Mechanical Keyboard', sku: 'ELEC-KB-330', category: 'Electronics', price: 3499, quantity: 28, reorderLevel: 10, supplier: 'Keychron' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-440', category: 'Electronics', price: 1999, quantity: 20, reorderLevel: 8, supplier: 'boAt' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-501', category: 'Apparel', price: 599, quantity: 50, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jacket', sku: 'APRL-JK-502', category: 'Apparel', price: 2199, quantity: 28, reorderLevel: 10, supplier: 'Levis' },
  { name: 'A4 Notebook', sku: 'STNY-NB-601', category: 'Stationery', price: 90, quantity: 8, reorderLevel: 25, supplier: 'Classmate' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-701', category: 'Grocery', price: 650, quantity: 60, reorderLevel: 20, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-702', category: 'Grocery', price: 899, quantity: 5, reorderLevel: 10, supplier: 'Borges' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
  await mongoose.disconnect();
})();
