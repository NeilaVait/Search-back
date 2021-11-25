const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = 5000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.listen(PORT, console.log(`back end online on port ${PORT}`));
