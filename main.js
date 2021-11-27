let latitude=22.7868542, longitude=88.3643296;

mapboxgl.accessToken = "pk.eyJ1IjoiamFkeW4iLCJhIjoiY2t3ZTd5NjlvMDI2YTJwdXR6aGlkeGZweCJ9.IVB7S_Y9uYwq-e2Tex80Vg"
var map=new mapboxgl.Map({
    container:"map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:4
})

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([18.9220, 72.8347])
.addTo(map);

var img3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([28.6129, 77.2295])
.addTo(map);

var img4 = document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([28.5535, 77.2588])
.addTo(map);

var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([22.5448, 88.3426])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);