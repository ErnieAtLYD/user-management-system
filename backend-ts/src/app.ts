import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from './routes/users';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
