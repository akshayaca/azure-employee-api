const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', employeeRoutes);
app.use(apiKeyAuth);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
