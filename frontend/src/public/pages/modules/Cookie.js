class Cookie {
    constructor() {
        this.cookie = document.cookie;
    }

    is_alive() {
        return this.cookie != null
    }

    get_cookie(name) {
        const template = (`${name}=(.+?);`)
        const regexp = new RegExp(template)
        const result = cookie.match(regexp)

        if (result) 
            return result;
        else
            return false
    }
}

module.exports = new Cookie();