let colorHolder = document.querySelector("h2") as HTMLHeadingElement;
let colorHolderText: string = colorHolder!.innerText;
let colorChanger = document.querySelector(".change-color") as HTMLButtonElement;
let hexToRGB = document.querySelector(".s") as HTMLButtonElement;
let letters = "0123456789ABCDEF";
let pageColor = "";
function generateRandomColor(): string {
  pageColor = "#";
  for (let i = 0; i < 6; i++) {
    pageColor += letters[Math.floor(Math.random() * 16)];
  }
  return pageColor;
}
if (colorChanger) {
  colorChanger.onclick = function (): void {
    generateRandomColor();
    if (colorHolder) {
      colorHolder.innerText = colorHolderText + pageColor;
    }
    document.body.style.backgroundColor = pageColor;
    colorChanger!.style.backgroundColor = pageColor;
  };
}
function hexToRgb(hex: string): string {
  if (hex.length !== 7) return "";
  const arrBuff = new ArrayBuffer(4);
  const vw = new DataView(arrBuff);
  vw.setUint32(0, parseInt(hex.slice(1), 16), false);
  const arrByte = new Uint8Array(arrBuff);
  return `rgb(${arrByte[1]}, ${arrByte[2]}, ${arrByte[3]})`;
}
hexToRGB.onclick = function () {
  pageColor = hexToRgb(pageColor);
  if (pageColor.length !== 0) {
    colorHolder.innerText = colorHolder.innerText.slice(0, -7);
    colorHolder.innerText += pageColor;
  }
};
