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

const items = document.querySelectorAll(".product-item");
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    const product = products[index];
    if (product) {
      window.location.href = `product.html?id=${product.id}`;
    }
  });
});
