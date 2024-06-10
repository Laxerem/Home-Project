class Permanent_Page {

    constructor() {
        this.container = document.querySelector(".content");
        this.body = document.body
        this.page = null;
    }

    render_page(class_page) {
        this.page = new class_page();
        const section = this.page.section;

        const container_page = this.container.querySelector('section');
        console.log(container_page)

        if (container_page == null) {
            this.container.appendChild(section);
        }
        else {
            container_page.replaceWith(section)
        }
    }
}

export default Permanent_Page