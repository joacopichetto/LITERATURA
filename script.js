// Obtener todos los elementos de encabezado del acordeón
const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentNode;
        item.classList.toggle("active");
    });
});



const accordionHeaders = document.querySelectorAll(".accordion-header");


accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentNode;
        item.classList.toggle("active");

       
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherItem = otherHeader.parentNode;
                otherItem.classList.remove("active");
            }
        });
    });
});
