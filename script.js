function VeranderGrid(wrapper) {
    grid = document.getElementsByClassName("grid")[0];
    rijHoogte = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rijRuimte = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rijen = Math.ceil((wrapper.querySelector('.content').getBoundingClientRect().height + rijRuimte) / (rijHoogte + rijRuimte));
    wrapper.style.gridRowEnd = "span " + rijen;
}

function VeranderAlles() {
    alles = document.getElementsByClassName("wrapper");
    for (x = 0; x < alles.length; x++) {
        VeranderGrid(alles[x]);
    }
}

function resizeInstance(instance) {
    wrapper = instance.elements[0];
    VeranderGrid(wrapper);
}

window.onload = VeranderAlles();
window.addEventListener("resize", VeranderAlles);

alles = document.getElementsByClassName("wrapper");
for (x = 0; x < alles.length; x++) {
    imagesLoaded(alles[x], resizeInstance);
}