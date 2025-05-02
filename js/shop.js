document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const categoryCheckboxes = document.querySelectorAll(
    "input[name='category']"
  );
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  const productList = document.querySelector(".product-list");

  function renderProducts(filteredProducts) {
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
      productList.innerHTML = "<p>No products found.</p>";
      return;
    }

    filteredProducts.forEach((product) => {
      const productItem = document.createElement("a");
      productItem.href = `product.html?id=${product.id}`;
      productItem.className = "product-link";

      productItem.innerHTML = `
        <div class="product-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-details">
            <h3>${product.name}</h3>
            <h4 class="product-category">${product.category}</h4>
            <p class="product-description">${product.description}</p>
            <div class="price-add-to-cart">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      `;

      productList.appendChild(productItem);
    });
  }

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.nextSibling.textContent.trim());
    const maxPrice = parseFloat(priceRange.value);

    priceValue.textContent = `$${maxPrice}`;

    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
  }

  // Event listeners
  searchInput.addEventListener("input", filterProducts);
  categoryCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", filterProducts)
  );
  priceRange.addEventListener("input", filterProducts);

  // Initial render
  renderProducts(products);
});
