//Не реализовано. Думаю есть ли в этом смысл

const Cookie = require("../modules/Cookie.js")

class Authorization_page {
    constructor() {
        this.authorization = false;
        
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (!Cookie.is_alive()) {
        
    }
})