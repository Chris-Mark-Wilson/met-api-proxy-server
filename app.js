const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const metApi=process.env.MET_API
app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const{meturl}=req.query
    const response = await axios.get(meturl);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.toString() });
  }
});

app.get('/png',async(req,res)=>{
  try{
    const{meturl}=req.query
   
    const response = await axios.get(meturl,{responseType:'arraybuffer'});
    res.set('Content-Type', 'image/png');
    res.send(response.data)
  }catch(error){
    console.log(error);
    res.status(500).json({ error: error.toString() });
  }
}
)

app.listen(3000, () => console.log('Proxy server running on port 3000'));