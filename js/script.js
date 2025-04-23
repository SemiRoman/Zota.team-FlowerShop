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
