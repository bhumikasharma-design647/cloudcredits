const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/save', (req, res) => {
  const { qrData } = req.body;
  console.log("Received QR Data:", qrData);

  // You can also save this to a file or database
  res.json({ message: 'QR data received successfully!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
