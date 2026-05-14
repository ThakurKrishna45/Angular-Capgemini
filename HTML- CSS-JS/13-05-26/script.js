class Product {

    static count = 1;

    #costPrice;

    constructor(name, category, price, quantity, costPrice = 0) {

        this.id = Product.generateId();
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.lastUpdated = new Date().toLocaleDateString();

        this.#costPrice = costPrice;
    }

    static generateId() {

        return `PRD${String(Product.count++).padStart(3, "0")}`;
    }

    updateStock(newQuantity) {

        this.quantity = newQuantity;
        this.lastUpdated = new Date().toLocaleDateString();
    }

    applyDiscount(percent) {

        this.price =
            this.price - (this.price * percent / 100);
    }

    getDetails() {

        return `
${this.name}
${this.category}
$${this.price}
Qty: ${this.quantity}
`;
    }
}

const productsMap = new Map();

const categoriesSet = new Set();

const productContainer =
    document.getElementById("product-container");

const stockAlerts =
    document.getElementById("stock-alerts");

const totalProducts =
    document.getElementById("total-products");

const inventoryValue =
    document.getElementById("inventory-value");

const totalCategories =
    document.getElementById("total-categories");

const resultOutput =
    document.getElementById("result-output");

const loadingSpinner =
    document.getElementById("loading-spinner");

const searchBox =
    document.getElementById("search-box");

const filterCategory =
    document.getElementById("filter-category");

const minPrice =
    document.getElementById("min-price");

const maxPrice =
    document.getElementById("max-price");

const operationCounter = (() => {

    let count = 0;

    return () => ++count;
})();

const initialProducts = [

    new Product(
        "Wireless Mouse",
        "Electronics",
        25.99,
        50
    ),

    new Product(
        "USB Cable",
        "Electronics",
        10,
        100
    ),

    new Product(
        "Keyboard",
        "Electronics",
        45,
        20
    ),

    new Product(
        "T-Shirt",
        "Clothing",
        15,
        70
    ),

    new Product(
        "Jeans",
        "Clothing",
        40,
        30
    ),

    new Product(
        "Jacket",
        "Clothing",
        80,
        10
    ),

    new Product(
        "JavaScript Guide",
        "Books",
        20,
        15
    ),

    new Product(
        "HTML Handbook",
        "Books",
        18,
        12
    ),

    new Product(
        "Notebook",
        "Stationery",
        5,
        200
    ),

    new Product(
        "Pen Set",
        "Stationery",
        8,
        150
    )

];

initialProducts.forEach(product => {

    productsMap.set(product.id, product);

    categoriesSet.add(product.category);
});

function displayProducts(productsArray) {

    productContainer.innerHTML = "";

    productsArray.forEach(product => {

        let stockClass = "";

        if (product.quantity < 20) {

            stockClass = "low-stock";
        }

        else if (product.quantity < 50) {

            stockClass = "medium-stock";
        }

        else {

            stockClass = "high-stock";
        }

        let card = `
            <div class="product-card ${stockClass}">

                <h3>${product.name}</h3>

                <p>Category: ${product.category}</p>

                <p>Price: $${product.price}</p>

                <p>Quantity: ${product.quantity}</p>

                <p>Last Updated: ${product.lastUpdated}</p>

                <button onclick="updateProduct('${product.id}')">
                    Update
                </button>

                <button onclick="deleteProduct('${product.id}')">
                    Delete
                </button>

            </div>
        `;

        productContainer.innerHTML += card;
    });

    updateSummary();

    checkLowStock();
}

function updateSummary() {

    totalProducts.innerText =
        productsMap.size;

    let totalValue = 0;

    productsMap.forEach(product => {

        totalValue +=
            product.price * product.quantity;
    });

    inventoryValue.innerText =
        `$${totalValue.toFixed(2)}`;

    totalCategories.innerText =
        categoriesSet.size;
}

function addProduct() {

    const name =
        document.getElementById("product-name").value;

    const category =
        document.getElementById("product-category").value;

    const price =
        Number(
            document.getElementById("product-price").value
        );

    const quantity =
        Number(
            document.getElementById("product-quantity").value
        );

    if (
        name === "" ||
        category === "" ||
        price <= 0 ||
        quantity < 0
    ) {

        alert("Enter Valid Data");

        return;
    }

    const product =
        new Product(
            name,
            category,
            price,
            quantity
        );

    productsMap.set(product.id, product);

    categoriesSet.add(category);

    displayProducts(
        Array.from(productsMap.values())
    );

    resultOutput.innerText =
        `Product Added Successfully
Operation Count: ${operationCounter()}`;
}

function updateProduct(id) {

    const product =
        productsMap.get(id);

    let quantity =
        prompt("Enter New Quantity");

    quantity = Number(quantity);

    if (quantity >= 0) {

        product.updateStock(quantity);

        displayProducts(
            Array.from(productsMap.values())
        );

        resultOutput.innerText =
            `Product Updated
Operation Count: ${operationCounter()}`;
    }
}

function deleteProduct(id) {

    productsMap.delete(id);

    displayProducts(
        Array.from(productsMap.values())
    );

    resultOutput.innerText =
        `Product Deleted
Operation Count: ${operationCounter()}`;
}

function checkLowStock() {

    let lowStockProducts =
        Array.from(productsMap.values())
        .filter(product => product.quantity < 20);

    if (lowStockProducts.length === 0) {

        stockAlerts.innerText =
            "No Low Stock Alerts";
    }

    else {

        stockAlerts.innerHTML = "";

        lowStockProducts.forEach(product => {

            stockAlerts.innerHTML += `
                <p>
                    ${product.name}
                    (${product.quantity} left)
                </p>
            `;
        });
    }
}

function filterProducts() {

    let search =
        searchBox.value.toLowerCase();

    let category =
        filterCategory.value;

    let min =
        Number(minPrice.value) || 0;

    let max =
        Number(maxPrice.value) || Infinity;

    let filtered =
        Array.from(productsMap.values())
        .filter(product => {

            return (
                product.name
                .toLowerCase()
                .includes(search)
            ) &&

            (
                category === "" ||
                product.category === category
            ) &&

            (
                product.price >= min &&
                product.price <= max
            );
        });

    displayProducts(filtered);

    resultOutput.innerText =
        `Filtered ${filtered.length} Products`;
}

async function simulateAPICall() {

    loadingSpinner.style.display = "block";

    return new Promise(resolve => {

        setTimeout(() => {

            loadingSpinner.style.display = "none";

            resolve(
                Array.from(productsMap.values())
            );

        }, 1500);
    });
}

async function loadProducts() {

    const data =
        await simulateAPICall();

    displayProducts(data);
}

function* paginateProducts(products, pageSize) {

    let index = 0;

    while (index < products.length) {

        yield products.slice(
            index,
            index + pageSize
        );

        index += pageSize;
    }
}

let pages =
    paginateProducts(
        Array.from(productsMap.values()),
        5
    );

document
    .getElementById("next-page")
    .addEventListener("click", () => {

        let next = pages.next();

        if (!next.done) {

            displayProducts(next.value);
        }
    });

document
    .getElementById("prev-page")
    .addEventListener("click", () => {

        pages =
            paginateProducts(
                Array.from(productsMap.values()),
                5
            );

        let first = pages.next();

        displayProducts(first.value);
    });

document
    .getElementById("add-product-btn")
    .addEventListener("click", addProduct);

document
    .getElementById("filter-btn")
    .addEventListener("click", filterProducts);

searchBox.addEventListener(
    "keyup",
    filterProducts
);

var hoistVar = "Var Hoisted";

function hoistDemo() {

    console.log(hoistVar);
}

hoistDemo();

loadProducts();