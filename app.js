const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const metApi=process.env.MET_API
app.use(cors());
console.log(metApi)
app.get('/proxy', async (req, res) => {
  try {
    const{url}=req.query
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(3000, () => console.log('Proxy server running on port 3000'));