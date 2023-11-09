var map;
var myLatlng = new google.maps.LatLng(53.897211, 27.534863);
function initialize() {

  var styles = [
    {
      stylers: [
        { hue: "#cccccc" },
        { saturation: -120 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles,
  {name: "Styled Map"});

  var mapOptions = {
    zoom: 17,
    //center: new google.maps.LatLng(53.905497, 27.558681)
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });
  // To add the marker to the map, call setMap();
  marker.setMap(map);
  var contentString = 'Адрес: г. Минск, пр.Партизанский 8/2-1';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });*/
  infowindow.open(map,marker);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}
google.maps.event.addDomListener(window, 'load', initialize);
