var colorHolder = document.querySelector("h2");
var colorHolderText = colorHolder.innerText;
var colorChanger = document.querySelector(".change-color");
var hexToRGB = document.querySelector(".s");
var letters = "0123456789ABCDEF";
var pageColor = "";
function generateRandomColor() {
    pageColor = "#";
    for (var i = 0; i < 6; i++) {
        pageColor += letters[Math.floor(Math.random() * 16)];
    }
    return pageColor;
}
if (colorChanger) {
    colorChanger.onclick = function () {
        generateRandomColor();
        if (colorHolder) {
            colorHolder.innerText = colorHolderText + pageColor;
        }
        document.body.style.backgroundColor = pageColor;
        colorChanger.style.backgroundColor = pageColor;
    };
}
function hexToRgb(hex) {
    if (hex.length !== 7)
        return "";
    var arrBuff = new ArrayBuffer(4);
    var vw = new DataView(arrBuff);
    vw.setUint32(0, parseInt(hex.slice(1), 16), false);
    var arrByte = new Uint8Array(arrBuff);
    return "rgb(".concat(arrByte[1], ", ").concat(arrByte[2], ", ").concat(arrByte[3], ")");
}
hexToRGB.onclick = function () {
    pageColor = hexToRgb(pageColor);
    if (pageColor.length !== 0) {
        colorHolder.innerText = colorHolder.innerText.slice(0, -7);
        colorHolder.innerText += pageColor;
    }
};
