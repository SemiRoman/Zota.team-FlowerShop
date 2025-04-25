window.addEventListener("scroll", function () {
  const img = document.querySelector(".scrolling-img img");
  const section = document.querySelector("#about-us");
  const rect = section.getBoundingClientRect();

  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    const scrollSpeed = 0.4;
    const offset = rect.top * scrollSpeed;
    img.style.transform = `translateY(${offset}px)`;
  }
});

function initMap() {
  var mapOptions = {
    zoom: 10,
    center: { lat: 47.0105, lng: 28.8638 }, // Default location
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var locations = [
    { title: "Location 1", lat: 40.7128, lng: -74.006 },
    { title: "Location 2", lat: 40.73061, lng: -73.935242 },
  ];

  locations.forEach(function (location) {
    var marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.title,
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const aboutUs = document.getElementById("about-us");
  const video = document.getElementById("behindScenesVideo");

  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(aboutUs);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const searchInput = document.getElementById("search");
//   const categoryFilters = document.querySelectorAll('input[name="category"]');
//   const priceRange = document.getElementById("price-range");
//   const priceValue = document.getElementById("price-value");

//   priceRange.addEventListener("input", () => {
//     priceValue.textContent = `$${priceRange.value}`;
//     filterProducts();
//   });

//   function filterProducts() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const selectedCategories = Array.from(categoryFilters)
//       .filter((checkbox) => checkbox.checked)
//       .map((checkbox) => checkbox.parentNode.textContent.trim().toLowerCase());
//     const priceLimit = parseInt(priceRange.value, 10);

//     const productItems = document.querySelectorAll(".product-item");

//     productItems.forEach((item) => {
//       const name = item.querySelector("h3").textContent.toLowerCase();
//       const price = parseFloat(
//         item.querySelector(".product-price").textContent.replace("$", "")
//       );

//       const matchesSearch = name.includes(searchTerm);
//       const matchesCategory =
//         selectedCategories.length === 0 ||
//         selectedCategories.some((category) =>
//           item
//             .querySelector(".product-category")
//             .textContent.toLowerCase()
//             .includes(category)
//         );
//       const matchesPrice = price <= priceLimit;

//       if (matchesSearch && matchesCategory && matchesPrice) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   }

//   searchInput.addEventListener("input", filterProducts);
//   categoryFilters.forEach((checkbox) =>
//     checkbox.addEventListener("change", filterProducts)
//   );

//   filterProducts();
// });
