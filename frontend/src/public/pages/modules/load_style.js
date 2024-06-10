function load_style(name) {
    let styles_link = document.createElement('link');
        styles_link.rel = 'stylesheet';
        styles_link.type = 'text/css';
        styles_link.className = name;
        styles_link.href = `style/${name}.css`;
        
    if (document.head.getElementsByClassName(name).length == 0) {
        document.head.appendChild(styles_link)
    }
    
}

export default load_style