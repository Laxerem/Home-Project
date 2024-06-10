class Permanent_Page {

    html_code = {html: ""} //переменная для ссылки

    constructor() {
        this.container = document.querySelector(".content");
        this.body = document.body
        this.page = null;
    }

    render_page(class_page) {
        this.page = new class_page(this.html_code);
        
        this.container.innerHTML = this.html_code.html
    }
}

export default Permanent_Page