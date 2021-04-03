import './database';
import express from 'express';
import 'express-async-errors'
import cors from 'cors';
import routes from './routes';
import handleGlobalException from './shared/middlewares/handleGlobalException';

const app = express();

const PORT = 3333;

app.use(cors({ origin: "*" }))
app.use(express.json())
app.use(routes);

app.use(handleGlobalException)


app.listen(PORT, () => {
  console.log(`listen on ${PORT} 🐺`);
})