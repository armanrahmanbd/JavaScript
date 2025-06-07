const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form .generate"),
  qrImg = wrapper.querySelector(".qr-code img"),
  downloadBtn = wrapper.querySelector(".form .download"),
  printBtn = wrapper.querySelector(".form .print");
let preValue;

function showActionButtons(show) {
  downloadBtn.style.display = show ? "block" : "none";
  printBtn.style.display = show ? "block" : "none";
}

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    qrValue
  )}`;
  qrImg.onload = () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
    showActionButtons(true);
  };
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
    showActionButtons(false);
    qrImg.src = "";
  }
});

downloadBtn.addEventListener("click", () => {
  const qrValue = qrInput.value.trim();
  if (!qrValue || !qrImg.src) return;
  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qr-code.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

printBtn.addEventListener("click", () => {
  const qrValue = qrInput.value.trim();
  if (!qrValue || !qrImg.src) return;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Print QR Code</title>
        <style>
          body { text-align: center; }
          img { margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>QR Code</h1>
        <img src="${qrImg.src}" alt="QR Code">
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
});
// Add a download button to the HTML
// <button class="download">Download QR Code</button>
// Ensure the button is styled appropriately in your CSS
// .form .download {
//     margin-top: 10px;
//     padding: 10px 20px;
//     background-color: #4CAF50;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }
// .form .download:hover {
//     background-color: #45a049;
// }
// Ensure the HTML structure includes a button for downloading the QR code
// <div class="form">
//     <input type="text" placeholder="Enter text or URL">
//     <button>Generate QR Code</button>
//     <button class="download">Download QR Code</button>
//     <button class="print">Print QR Code</button>
// </div>
// add printing functionality
// const printBtn = wrapper.querySelector(".form .print");
// printBtn.addEventListener("click", () => {
//   const qrValue = qrInput.value.trim();
//   if (!qrValue) return;
//   const printWindow = window.open("", "_blank");
//   printWindow.document.write(`
//     <html>
//       <head>
//         <title>Print QR Code</title>
//         <style>
//           body { text-align: center; }
//           img { margin-top: 20px; }
//         </style>
//       </head>
//       <body>
//         <h1>QR Code</h1>
//         <img src="${qrImg.src}" alt="QR Code">
//       </body>
//     </html>
//   `);
//   printWindow.document.close();
//   printWindow.print();
// });
// Add a print button to the HTML
// <button class="print">Print QR Code</button>
// Ensure the button is styled appropriately in your CSS
// .form .print {
//     margin-top: 10px;
//     padding: 10px 20px;
//     background-color: #2196F3;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }
// .form .print:hover {
//     background-color: #0b7dda;
// }
// Ensure the HTML structure includes a button for printing the QR code
