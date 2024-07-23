const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
