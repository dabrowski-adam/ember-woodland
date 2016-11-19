import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
    Product.create({title: "Tent", price: 10, description: "Cool item. ", imageUrl: ""}),
    Product.create({title: "Sleeping Bag", price: 5, description: "Cool item. ", imageUrl: ""}),
    Product.create({title: "Flashlight", price: 2, description: "Cool item. ", imageUrl: ""}),
    Product.create({title: "First-Aid Kit", price: 3, description: "Cool item. ", imageUrl: ""})
];

const orders = [
    Order.create({id: "1234", name: "Blaise Blobfish", items: [
        LineItem.create({product: products[0], quantity: 1}), 
        LineItem.create({product: products[1], quantity: 2}), 
        LineItem.create({product: products[2], quantity: 1})
    ]})
];

export default Ember.Service.extend({
    getOrderById(id) {
        const orders = this.getOrders();
        return orders.findBy("id", id);
    },
    getOrders() {
        return orders;
    },
    getProducts() {
        return products;
    },
    newOrder() {
        return Order.create({
            items: products.map((product) => {
                return LineItem.create({
                    product: product
                });
            })
        });
    }, 
    saveOrder(order) {
        order.set('id', 999);
        orders.pushObject(order);
    }
});
