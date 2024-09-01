import update_day from "./date.js";
import load_style from "../modules/load_style.js";

class Home_Page {
    center_text;

    constructor() {
        load_style("home")

        this.section = document.createElement('section');
        this.div = document.createElement('div');
        this.center_text = document.createElement('h1');

        this.section.className = "main";
        this.div.className = "brutal-home";

        this.section.append(this.div);
        this.div.append(this.center_text);
        
        update_day(this.center_text)

        this.html = this.section.outerHTML;
    }
}

export default Home_Page;