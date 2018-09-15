const parent = document.querySelector("#colorInput");
var picker = new Picker(parent);

picker.onChange = function (color) {
    parent.style.backgroundColor = color.rgbaString
    changeColor(
        color.rgbaString
        .split('(')
        .pop()
        .split(')')
        .shift()
        .split(',')
        .slice(0, 3).join(',')
    )
};
const density = document.getElementById("density");
const distance = document.getElementById("distance");

density.oninput = function () {
    seed(this.value);
};
distance.oninput = function () {
    changeDistance(this.value)
};