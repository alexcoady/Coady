require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here

        
        var mapOptions = {
          center: new google.maps.LatLng(51.495373,-0.189638),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById("map--location"),
            mapOptions);
    

});