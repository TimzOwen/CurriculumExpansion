const products = [
  {
    id: 0,
    name: "Vanilla buttercream cupcake",
    price: 2.99
  },
  {
    id: 1,
    name: "French Macaroon",
    price: 3.99
  },
  {
    id: 2,
    name: "Fruit sprinkles cupcake",
    price: 3.99
  },
  {
    id: 3,
    name: "Pink flower cupcake",
    price: 5.99
  }
];

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discountPercentage = 30;
  }

  addItem(id, products) {
    const item = products.find(item => item.id === id);
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
  
  getCount() {
    return this.items.length;
  }
  
  removeItem(id) {
    const index = this.items.indexOf(id);
    this.items.splice(index, 1);
  }
  
  clearCart() {
    this.items = [];
  }
  
  applyDiscount(amount) {
    return (this.discountPercentage / 100 * amount).toFixed(2);
  }
}

/*
You will now see that the number has been rounded and its type is string!

But we want to still work with numbers and there is another built-in method that you can call on string types to help us.

The parseFloat() method converts the string back to number. Let's convert the string back to number. For ex:

parseFloat("0.24")

*/

