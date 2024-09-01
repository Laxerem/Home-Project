import Home_Page from "../main/home.js"
import Sensors_Page from "../sensors/sensors.js"
import throw_error from "./error.js"

const hash_key = {
    "home": Home_Page,
    "sensors": Sensors_Page
}

class Router {

    constructor(Pernament_Page) {
        this.hash = window.location.hash.slice(1);
        const MainPage = Pernament_Page;

        window.addEventListener('hashchange', () => {
            const new_hash = window.location.hash.slice(1);
            const class_page = hash_key[new_hash]
            if (class_page) {
                this.hash = new_hash;
                MainPage.render_page(class_page);
            }
            else {
                throw_error(404)
            }
        })
    }

    get_page(hash) {
        const hash_page = hash_key[hash]; //hash_page - экземпляр класса
        if (hash_page) {
            return hash_page;
        }
        else {
            return null;
        }
    }

    get_current_page() {
        const page = hash_key[this.hash];
        if (page != null) {
            return hash_key[this.hash]
        }
        else {
            throw_error(404);
        }
    }
}
export default Router;