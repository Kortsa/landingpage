

document.addEventListener("scroll", ()=> {
    let scroll_position = window.scrollY;
        if (scroll_position > 250) {
            header.style.backgroundColor = "red"
        }
        else {
            header.style.backgroundColor = "transparent"
        }
    
})