const express = require('express');      
const cors = require('cors'); 
const app = express();                  
require('dotenv').config();             

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());                 
app.use(require('./routes/authRoutes')); 

const PORT = process.env.PORT || 3000;    
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});