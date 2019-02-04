function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

/*
   var l1 = {Lat:-27.65, Lng: 153.15};
   var l2 = {Lat:-33.96365, Lng: 151.093827};
   var l3 = {Lat:-35.330400, Lng: 149.179830};
   var l4 = {Lat:-38.151700, Lng: 144.359300};
   var l5 = {Lat:-42.833519, Lng: 147.262955};
   var l6 = {Lat:-38.151699, Lng: 144.359299};
   var l7 = {Lat:-34.958591, Lng: 138.544266};
   var l8 = {Lat:-32.014710, Lng: 115.926980};
   

   var locations = [l1,l2.l3.l4.l5.l6.l7.l8];
   var coords = locations[i]

   

function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};



    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

   for(var i=0; i<locations.length; i++){

        var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: 'Hello World!'
      });
    }
 }
 */