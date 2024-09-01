import Permanent_Page from "./mainpage.js"
import Router from "./routing.js";
import Sensor from "../sensors/sensors.js"

class App {

    constructor() {
        this.window_page = new Permanent_Page();
        this.router = new Router(this.window_page);
    }

    run() {
        const page = this.router.get_current_page();
        if (page) {
            this.window_page.render_page(page);
        }
    }
}
const app = new App();
const sensor = new Sensor();
app.run();