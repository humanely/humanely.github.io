//Google Map

var map;

var map_lon = $(".map-canvas").attr("data-map-lon");  // Longitude
var map_lat = $(".map-canvas").attr("data-map-lat");  // Latitude

var map_small_lon = $(".map-canvas").attr("data-map-small-lon");  // Longitude
var map_small_lat = $(".map-canvas").attr("data-map-small-lat");  // Latitude

// Marker
var map_marker_lon = $(".map-canvas").attr("data-map-marker-lon");  // Longitude
var map_marker_lat = $(".map-canvas").attr("data-map-marker-lat");  // Latitude
var map_marker_title = $(".map-canvas").attr("data-map-marker-title");  // Latitude

//Default

if(map_lon==undefined){map_lon = -34.697;}
if(map_lat==undefined){map_lat = 151.22;}

if(map_small_lon==undefined){map_small_lon = map_lon;}
if(map_small_lat==undefined){map_small_lat = map_lat;}


if(map_marker_lon==undefined){map_marker_lon = "";}
if(map_marker_lat==undefined){map_marker_lat = "";}
if(map_marker_title==undefined){map_marker_title = "";}


var gMapsLoaded = false;
window.gMapsCallback = function(){
    gMapsLoaded = true;
    $(window).trigger('gMapsLoaded');
}
window.loadGoogleMaps = function(){
    

    if ( $('body').hasClass('load-google-maps')) {
    	$(window).trigger('gMapsLoaded');
    } else {
    	if(gMapsLoaded) return window.gMapsCallback();
    
	    var script_tag = document.createElement('script');
		    script_tag.setAttribute("type","text/javascript");
		    script_tag.setAttribute("src","http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
	    $(".map-canvas").append(script_tag);
	    $('body').addClass('load-google-maps')

    }
}

$(document).ready(function(){

    function initialize(){
       if ( $('body').width() + scrollWidth <= 991 ) {
			// coordinate for small display
			var myLatlng = new google.maps.LatLng(map_small_lon, map_small_lat);
		}
		else {
			// coordinate for large display
			var myLatlng = new google.maps.LatLng(map_lon, map_lat);
		}

		var mapOptions = {
			zoom: 8,
			draggable: false,
			disableDefaultUI: true,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			center: myLatlng
		};

		var map = new google.maps.Map(document.getElementsByClassName('map-canvas')[0],mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(map_marker_lon, map_small_lat),
			map: map,
			title: map_marker_title
		});
    }

    $(window).bind('gMapsLoaded', initialize);
    window.loadGoogleMaps();
    $(window).resize(initialize);
});

