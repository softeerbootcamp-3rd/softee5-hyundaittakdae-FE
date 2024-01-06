// 위치 정보를 가져오는 함수
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("curPlaceName").innerHTML =
      "위치 정보를 가져올 수 없습니다.";
  }
}

// 위치 정보를 표시하는 함수
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Geolocation API를 이용해 주소 가져오기
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(latitude, longitude);

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        // 가져온 위치 정보를 div에 넣기
        var addressComponents = results[1].address_components;
        var city = getAddressComponent(
          addressComponents,
          "administrative_area_level_1"
        );
        var district = getAddressComponent(
          addressComponents,
          "sublocality_level_2"
        );
        document.getElementById("curPlaceName").innerText =
          city + " " + district;
      }
    } else {
      console.error("Geocoder failed due to: " + status);
    }
  });
}

// 특정 주소 컴포넌트를 가져오는 함수
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

// 페이지 로드 시 위치 정보 가져오기
getLocation();
