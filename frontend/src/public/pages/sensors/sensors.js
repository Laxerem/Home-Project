import load_style from "../modules/load_style.js";
import Temperature_section from "./temperature.js";

class Sensors_page {
    constructor() {
        load_style("sensors")
        this.temperature_section = new Temperature_section();
        this.temperature_section.create_card("LOOL")
        this.html = this.temperature_section.sensors_container.outerHTML
    }
}

Sensor = new Sensors_page()


export default Sensors_page;