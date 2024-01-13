function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("curPlaceName").innerHTML =
      "위치 정보를 가져올 수 없습니다.";
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        var addressComponents = results[1].address_components;
        console.log(addressComponents);
        var city = addressComponents[1].long_name;
        var district = addressComponents[2].long_name;
        if (addressComponents.length === 3) {
          city = addressComponents[0].long_name;
          district = addressComponents[1].long_name;
        } else if (addressComponents.length === 6) {
          city = addressComponents[3].long_name;
          district = addressComponents[2].long_name;
        } else if (addressComponents.length === 7) {
          city = addressComponents[4].long_name;
          district = addressComponents[3].long_name;
        }

        document.getElementById("curPlaceName").innerText =
          city + " " + district + " 인근";
      }
    } else {
      console.error("Geocoder failed due to: " + status);
    }
  });
}

function getAddressComponent(components, type) {
  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    if (component.types.includes(type)) {
      return component.long_name;
    }
  }
  return "";
}

var callMyPlaceBtn = document.getElementById("callMyPlaceBtn");
callMyPlaceBtn.addEventListener("click", () => {
  getLocation();
  console.log("내 위치 불러오기");
});

getLocation();
