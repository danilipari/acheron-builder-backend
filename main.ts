const express = require('express');
const cors = require("cors");
const helmet = require('helmet');
require('dotenv').config();
const os = require('os');
const morgan = require('morgan');

const app = express();
app.use(helmet());
app.disable('x-powered-by');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('combined'));

app.use(cors());

/* Homepage Backend */
app.get('/', (req: any, res: { send: (arg0: string) => any; }) =>
  res.send(`init`)
);



const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`AcheronBuilderBackend is running on port ${port}.`) });