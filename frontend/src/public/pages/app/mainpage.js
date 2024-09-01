class Permanent_Page {

    html_code = {html: ""} //переменная для ссылки

    constructor() {
        this.container = document.querySelector(".content");
        this.body = document.body
        this.page = null;
    }

    render_page(class_page) {
        this.page = new class_page();
        console.log(this.page.html)
        this.container.innerHTML = this.page.html;
        console.log(this.container)
    }
}

export default Permanent_Page