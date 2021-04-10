const updateMap = () => {
    fetch("https://shyam-makwana.github.io/coronacases.json")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                var el = document.createElement('div');
                el.className = 'marker';

                var latitude = element.latitude;
                var longitude = element.longitude;
                var cases = element.infected;
                let color;
                if (cases > 255) color = `rgb(255,0,0)`;
                else color = `rgb(${cases},0,0)`;
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                .setLngLat([longitude, latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            '<h3>' +
                            'Corona Cases ' +
                            '</h3><p>' +
                            'to Display ' +
                            '</p>'
                        )
                )
                .addTo(map);
            });
        })
}

updateMap();
