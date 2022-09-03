/**
 * You started from xero, and now you are about to create an E-STORE.
 * I can't believe it. You really try to with such a wonderfull application.
 * 
 * Suggestions
 * ------------------------------------
 * It will be better, to load the products dynamically, using javascript.
 * Using this approach will enable you to add new product, without
 * modifiying HTML file(s). It can also enable you to add new product 
 * when the application is running (i.e at runtime).
 */

// Create products array
const productsArray = [
    {
        id: 1,
        name: 'Samsung TV',
        price: 500000,
    },
    {
        id: 2,
        name: 'Pixel 4a',
        price: 250000
    }
];

// Create function that will create new product
function createProduct(data) {
    // Create HTML elements
    const product = document.createElement("div");
    const productName = document.createElement("h3");
    const productPrice = document.createElement("p");
    // Create HTML textNodes
    const name = document.createTextNode(data.name);
    const price = document.createTextNode(data.price);

    // Set HTML attributes dynamically
    product.setAttribute("id", `p${data.id}`);

    // Append textNodes to elements
    productName.appendChild(name);
    productPrice.appendChild(price);
    // Append elements to elements
    product.appendChild(productName);
    product.appendChild(productPrice);

    // Return newly created product.
    return product;
}

// Get products container from HTML file
const products = document.getElementById("products");

// We can add new product easily
productsArray.append({
    id: 3,
    name: 'PS 5',
    price: 300000
})


// To display the products, we can loop through them.
for(const data of productsArray) {
    // Create new product
    const product = createProduct(data);
    // Display newly created HTML element.
    products.appendChild(product);
}

// GOOD LUCK
// Happy coding
