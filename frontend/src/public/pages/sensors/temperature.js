class Temperature_Card {
    constructor(sensor_name) {
        const div_datchic_temperature = document.createElement('div');
        const h1_name_sensor = document.createElement('h1');
        const temperature_indicator = document.createElement('div');
        const temperature = document.createElement('p');

        div_datchic_temperature.className = "datchic-temperature";
        h1_name_sensor.className = "name-datchic-temperature";
        temperature_indicator.className = "indicators-temperature";

        div_datchic_temperature.appendChild(h1_name_sensor);
        div_datchic_temperature.appendChild(temperature_indicator);
        temperature_indicator.appendChild(temperature);
        
    }
}

class Temperature_section {
    constructor() {
        const section_container = document.createElement('section');
        const div_temperature = document.createElement('div');
        const h1_zagolovok = document.createElement('h1');
        const div_sensors = document.createElement('div');

        section_container.className = "sensors-container";
        div_temperature.className = "Temperature";
        h1_zagolovok.className = "zagolovok";
        div_sensors.className  = "sensors";

        h1_zagolovok.innerText = "Датчики температуры"
    }
}

export default Temperature_section