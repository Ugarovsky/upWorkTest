const next = document.querySelectorAll(".slider .next");
const prev = document.querySelectorAll(".slider .prev");
let widthSlider = document.querySelectorAll(".slider > .items-block")[0].offsetWidth;
let translate = 0;
let translateWidth;
if (window.innerWidth < 1100) {
    translateWidth = window.innerWidth * 0.9;
    document.querySelectorAll(".some-seller-item").forEach((elem) => {
        elem.style.width = translateWidth - 40 + "px";
    });
} else {
    translateWidth = 276;
}
next.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const sliderItems = elem.closest(".slider").childNodes[3].childNodes[1];
        const widthAllItems = sliderItems.offsetWidth;
        if ((widthSlider + translate) < widthAllItems) {
            translate += translateWidth;
            sliderItems.style.transform = `translate(-${translate}px, 0)`
        }
    });
});
prev.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const sliderItems = elem.closest(".slider").childNodes[3].childNodes[1];
        if (translate >= 0) {
            translate -= translateWidth;
            sliderItems.style.transform = `translate(-${translate}px, 0)`
        }
    });
})