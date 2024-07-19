const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

// Endpoint to serve another.json
app.get('/getRecords', (req, res) => {
    fs.readFile('another.json', 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading file' });
      }
      res.status(200).json(JSON.parse(data));
    });
  });

app.post('/addRecord', (req, res) => {
  const newRecord = req.body;

  // Read existing data from another JSON file
  fs.readFile('another.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    let existingData = JSON.parse(data);
    existingData.push(newRecord);

    fs.writeFile('another.json', JSON.stringify(existingData, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }

      res.status(200).json({ message: 'Record added successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
