let topMenu  = document.querySelector('.top-menu').querySelectorAll('.selector');
let slides   = document.querySelectorAll('.slide');
let sideMenu = document.querySelector('.side-menu').querySelectorAll('.selector');
let navs     = document.querySelectorAll('.nav');
let oks      = document.querySelectorAll('.ok');
let popUp   = document.querySelector('.warning-display');

topMenu.forEach((selector, i) => {
    selector.onclick = () => {
        topMenu.forEach(item => {
            item.classList.remove("active");
        });
        slides.forEach((item, i) => {
            item.classList.remove("active");
        });
        slides[i].classList.add("active");
        selector.classList.add("active");
    }
});

sideMenu.forEach((selector, i) => {
    selector.onclick = () => {
        if (selector.classList.contains("active")) {
            sideMenu.forEach((item, j) => {
                item.classList.remove("active");
                navs[j].style.display = "none";
            });
            selector.parentNode.parentNode.children[1].classList.remove("active");
            navs[i].style.display = "none";
        }
        else {
            sideMenu.forEach((item, j) => {
                item.classList.remove("active");
                navs[j].style.display = "none";
            });
            selector.classList.add("active");
            selector.parentNode.parentNode.children[1].classList.add("active");
            navs[i].style.display = "flex";
        }
    }
});

oks.forEach((ok, i) => {
    ok.onclick = () => {
        navs[i].style.display = "none";
        document.querySelector('.content').classList.remove("active");
    }
});

popUp.onclick = () => {
    document.querySelector('.pop-up').style.display = "flex";
}

document.querySelector('.okay').onclick = () => {
    document.querySelector('.pop-up').style.display = "none";
}
