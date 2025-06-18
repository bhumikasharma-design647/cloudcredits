function sendToBackend(data) {
  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ qrData: data })
  })
  .then(response => response.json())
  .then(result => {
    console.log("Server Response:", result);
  })
  .catch(err => console.error("Error sending to backend:", err));
}

function onScanSuccess(decodedText, decodedResult) {
  document.querySelector("#result span").innerText = decodedText;
  sendToBackend(decodedText);
  html5QrcodeScanner.clear(); // Stop scanning after first success
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", 
  { fps: 10, qrbox: 250 }
);
html5QrcodeScanner.render(onScanSuccess);
