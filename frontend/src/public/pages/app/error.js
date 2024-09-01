const error = {
    404: "Такой страницы не существует :("
}

const error_class_name = "error-container";

function throw_error(code_error) {
    if (document.getElementsByClassName(error_class_name).length == 0) {
        const container = document.querySelector('.content');
        container.innerHTML = ''

        const error_container = document.createElement('section')
        const error_text = document.createElement('h1')

        error_container.className = error_class_name;

        error_text.innerText = error[code_error];

        error_container.appendChild(error_text);
        container.appendChild(error_container);
        console.log(error)
    }
}

export default throw_error