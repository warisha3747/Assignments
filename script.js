// Shopping cart array
let cart = [];

// Function to add products to the cart
const addToCart = (productId, productName, quantity, price) => {
    cart.push({ productId, productName, quantity, price });
    console.log(`${productName} has been added to the cart.`);
};

// Example usage:
addToCart(1, "Laptop", 1, 1000);
addToCart(2, "Phone", 2, 500);

// Function to remove an item from the cart
const removeFromCart = (productId) => {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        console.log(`${cart[index].productName} has been removed from the cart.`);
        cart.splice(index, 1);
    } else {
        console.log("Product not found in the cart.");
    }
};

// Function to update the quantity of an item
const updateQuantity = (productId, newQuantity) => {
    cart = cart.map(item => 
        item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    console.log(`Quantity updated for product ID ${productId}.`);
};

// Example usage:
updateQuantity(1, 3);
removeFromCart(2);

// Function to calculate total price
const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return total;
};

// Example usage:
console.log(`Total Price: $${calculateTotalPrice()}`);

// Function to display cart summary
const displayCartSummary = () => {
    const summary = cart.filter(item => item.quantity > 0)
                        .map(item => `${item.productName}: ${item.quantity} x $${item.price} = $${item.quantity * item.price}`);
    console.log("Cart Summary:");
    summary.forEach(item => console.log(item));
};

// Example usage:
displayCartSummary();

// Function to apply a discount code
const applyDiscount = (code) => {
    let discount = 0;
    if (code === "DISCOUNT10") {
        discount = 0.10; // 10% discount
    }
    const totalPrice = calculateTotalPrice();
    const discountedPrice = totalPrice - (totalPrice * discount);
    console.log(`Total after discount: $${discountedPrice.toFixed(2)}`);
};

// Example usage:
applyDiscount("DISCOUNT10");
