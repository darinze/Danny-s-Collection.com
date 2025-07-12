const products = [
    { id: 1, title: "Unisex Chrome Heart Tracksuit", price: 150000, image: "Screenshot_28-5-2025_15259_www.bing.com.jpeg" },
    { id: 2, title: "Unisex Chrome Heart Tee's", price: 320000, image: "Screenshot_28-5-2025_2216_www.bing.com.jpeg" },
    { id: 3, title: "Chrome Denim Jeans", price: 90000, image: "Screenshot_28-5-2025_2652_www.bing.com.jpeg" },
    { id: 4, title: "Cartier Santos Blue Dial", price: 1500000, image: "Screenshot_28-5-2025_21121_www.bing.com.jpeg" },
    { id: 5, title: "Cartier Glasses", price: 130000, image: "Screenshot_28-5-2025_22954_www.bing.com.jpeg" },
    { id: 6, title: "Unisex Tracksuit", price: 180000, image: "Screenshot_28-5-2025_22243_www.temu.com.jpeg" },
    { id: 7, title: "Unisex Sweatshits", price: 70000, image: "Screenshot_28-5-2025_24133_www.temu.com.jpeg" },
    { id: 8, title: "Unisex Jersey", price: 75000, image: "Screenshot_28-5-2025_24235_www.temu.com.jpeg" },
  ];
  
  // Global cart object shared between scripts
  if (typeof cart === 'undefined') {
    window.cart = {};
  }
  
  const productsContainer = document.getElementById("products");
  
  function renderProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price">₦${product.price.toLocaleString()}</div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      productsContainer.appendChild(card);
    });
  }
  
  function addToCart(id) {
    if (cart[id]) {
      cart[id]++;
    } else {
      cart[id] = 1;
    }
    // Call cart.js’s renderCart() function to update cart display
    if (window.renderCart) {
      window.renderCart();
    }
  }
  
  // Listen for Add to Cart button clicks
  document.body.addEventListener("click", e => {
    if (e.target.classList.contains("add-to-cart")) {
      const id = e.target.dataset.id;
      addToCart(id);
    }
  });
  
  renderProducts();


  