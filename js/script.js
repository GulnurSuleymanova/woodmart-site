
const products = [
    {
        name: "Fusilli pasta",
        category: "Grocery",
        price: 139.99,
        img: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-1-opt-430x484.jpg.webp"
    },
    {
        name: "Hot Sopressata",
        category: "Grocery",
        price: 115.00,
        img: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-2-opt-430x484.jpg.webp"
    },
    {
        name: "Dallmayr prodomo",
        category: "Grocery",
        price: 223.00,
        img: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-3-opt-430x484.jpg.webp"
    },
    {
        name: "Sfizioso",
        category: "Grocery",
        price: 148.00,
        img: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-4-opt-430x484.jpg.webp"
    },
    {
        name: "Filetto di Pomidoro",
        category: "Grocery",
        price: 199.99,
        img: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-5-opt-430x484.jpg.webp"
    }

];

const productCardsContainer = document.getElementById("product-cards");
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    const priceElement = document.createElement("p");
    priceElement.textContent = `$${product.price}`;
    priceElement.style.color = "red";
    card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h2 class="product-name">${product.name}</h2>
    <p class="product-category">${product.category}</p>
  `;
    card.appendChild(priceElement);
    productCardsContainer.appendChild(card);
});


document.addEventListener("DOMContentLoaded", function () {
    var products = [
        { name: "Tonno all’Olio di Oliva", category: "Grocery", price: "$113.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-6-opt-430x484.jpg.webp" },
        { name: "Strolghino", category: "Grocery", price: "$160.95", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-10-opt-430x484.jpg.webp" },
        { name: "Filetto di Pomidoro", category: "Grocery", price: "$199.99", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-5-opt-430x484.jpg.webp" },
        { name: "Milk Chocolate", category: "Grocery", price: "$118.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-14-opt-430x484.jpg.webp" },
        { name: "Fusilli Pasta", category: "Grocery", price: "$139.99", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-1-opt-430x484.jpg.webp" },
        { name: "Tomato sauce", category: "Grocery", price: "$160.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-8-opt-430x484.jpg.webp" },
        { name: "Dallmayr prodomo", category: "Grocery", price: "$160.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-3-opt-430x484.jpg.webp" },
        { name: "Chili Powder", category: "Grocery", price: "$123.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-12-opt-430x484.jpg.webp" },
        { name: "Hot Sopressata", category: "Grocery", price: "$115.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-2-opt-430x484.jpg.webp" },
        { name: "Coffee mate", category: "Grocery", price: "$116.00", image: "https://woodmart.b-cdn.net/wp-content/uploads/2020/06/w-food-market-product-9-opt-430x484.jpg.webp" }
    ];

    var productListDiv = document.getElementById("product-list");
    var row;
    products.forEach(function (product, index) {
        if (index % 5 === 0) {
            row = document.createElement("div");
            row.classList.add("row");
            productListDiv.appendChild(row);
        }
        var productDiv = document.createElement("div");
        productDiv.classList.add("column");
        productDiv.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 style="font-size: 14px; margin-bottom: 5px;">${product.name}</h3>
                <p  "> ${product.category}</p>
                <p style="color: red;"> ${product.price}</p>
            </div>
        `;
        row.appendChild(productDiv);
    });
});



