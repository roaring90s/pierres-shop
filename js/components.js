document.addEventListener("DOMContentLoaded", function() {
    function loadComponent(selector, archive) {
        fetch(archive)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error at ${archive}`);
                }
                return response.text();
            })
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    loadComponent("header", "components/header.html");
});


let currentPage = 1;

function togglePage() {
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');
    const arrow = document.querySelector('.arrow');

    page1.classList.toggle('active');
    page2.classList.toggle('active');

    if (currentPage === 1) {
        arrow.textContent = '◀'; 
        arrow.classList.remove('right');
        arrow.classList.add('left');
        currentPage = 2;
    } else {
        arrow.textContent = '▶'; 
        arrow.classList.remove('left');
        arrow.classList.add('right');
        currentPage = 1;
    }
}

function setFavicon(faviconPath) {
    let link = document.querySelector("link[rel='icon']");

    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        document.head.appendChild(link);
    }

    link.href = faviconPath;
}

setFavicon("/img/pierres_shop.png");