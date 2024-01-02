const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Check ./client/package.json "proxy"

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});