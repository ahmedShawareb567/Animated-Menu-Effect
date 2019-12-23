
let anMenu = document.getElementById('anMenu'),
    pageY,
    ch,
    changeEl = 0;

    ch = anMenu.clientHeight;
    console.log(ch);

window.addEventListener('scroll', () => {
    pageY = window.pageYOffset;
    if (pageY > ch) {
        if (changeEl > pageY) {
            anMenu.style.transform = 'translateY(0%)';
            anMenu.style.marginTop = '1rem';
        }else {
            anMenu.style.transform = 'translateY(-120%)';
            anMenu.style.marginTop = '0rem';
        }
        changeEl = pageY;
    }
});