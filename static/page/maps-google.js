function initMaps() {
    var defaultMap = {
        zoom: 14,
        center: {
            lat: 40.712784,
            lng: -74.005941
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new google.maps.Map(document.getElementById("default_map"), defaultMap);
    var hybridMap = {
        zoom: 14,
        center: {
            lat: 40.712784,
            lng: -74.005941
        },
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    new google.maps.Map(document.getElementById("hybrid_map"), hybridMap);
}