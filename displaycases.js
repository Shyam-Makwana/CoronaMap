import coronaCases from './ListOfCoronaCases.js';

const addCommas = number => {
    number += '';
    var x = number.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

const updateMap = () => {
    coronaCases().forEach(element => {
        var el = document.createElement('div');
        el.className = 'marker';

        let state_name = element.name;
        let population = addCommas(element.pop);
        let recovered = addCommas(element.recovered);
        let sick = addCommas(element.sick);
        let death = addCommas(element.dead);
        let cases = addCommas(element.infected);
        let latitude = element.latitude;
        let longitude = element.longitude;
        let information = `<h3>${state_name}</h3><p>Population = ${population}</p><p>Recovered = ${recovered}</p>
        <p>Cases = ${cases}</p><p>Sick = ${sick}</p><p>Deaths = ${death}</p>`;
        new mapboxgl.Marker({
            draggable: false,
            color: 'rgb(255,0,0)'
        })
            .setLngLat([longitude, latitude])
            .setPopup(
                new mapboxgl.Popup({ offset: 35 }) // add popups
                    .setHTML(information)
            )
            .addTo(map);
    });
}

updateMap();
