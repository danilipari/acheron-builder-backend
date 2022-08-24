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

/* Homepage Backend */
app.get('/', (req, res) =>
  res.send(`<h2>Acheron Builder Backend System</h2>`)
);

/* Routes */
const workflowsRoutes = require('./routes/workflows');
const formsRoutes = require('./routes/forms');

app.use(cors());
app.use('/workflows', workflowsRoutes);
app.use('/forms', formsRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`AcheronBuilderBackend is running on port ${port}.`) });