const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./routes/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
