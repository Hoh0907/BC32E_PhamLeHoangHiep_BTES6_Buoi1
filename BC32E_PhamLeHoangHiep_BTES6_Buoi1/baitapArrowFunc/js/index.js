const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let container = document.getElementById("colorContainer");
loadColorPick = () => {
        for (let o = 0; o < colorList.length; o++) container.innerHTML += 0 == o ? "<button class='color-button " + colorList[o] + " active'></button>" : "<button class='color-button " + colorList[o] + "'></button>";
    },
    loadColorPick();
let colorPicker = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
for (let o = 0; o < colorPicker.length; o++)
    colorPicker[o].addEventListener("click", function() {
        changeColor(colorList[o], o);
    });
changeColor = (k, l) => {
    for (let k = 0; k < colorPicker.length; k++) colorPicker[k].classList.remove("active");
    colorPicker[l].classList.add("active"), (house.className = "house " + k);
};