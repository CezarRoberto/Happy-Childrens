const map = L.map("mapid").setView([-2.529707, -44.2543786], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//Create Icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// Create and add Marker

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  // Remove Icon
  marker && map.removeLayer(marker);

  // Add icon Layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// photos upload

function addPhotoField() {
  //pegar container de fotos
  const container = document.querySelector("#image");
  const fieldsContainer = document.querySelectorAll("new-image");
  const newFieldContainer =
    fieldsContainer[fieldsContainer.length - 1].cloneNode;
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  input.value = "";
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll("new-image");

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
  }
}

span.parentNode.remove();

function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="time"]');
  input.value = button.dataset.value;
}

function validate(event) {
  
  
  event.preventDefault()
  alert('Preencha todos os campos!')
}