import express from 'express';
import mongoose from 'mongoose';
import user from './routes/user';
import error from './middleware/error';

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://localhost:27017/reconvention',
  { useNewUrlParser: true }
);
app.use(express.json());
app.use('/api/users', user);
app.use(error);
const port = 5000;
app.get('/', (req, res) => {
  res.send('Please use api/users');
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Started up at port ${port}`);
});
