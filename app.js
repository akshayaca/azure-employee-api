const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const apiKeyAuth = require('./utils/apiKeyAuth');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(apiKeyAuth);
app.use('/api', employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
