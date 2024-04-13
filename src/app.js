const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const cityRoutes = require('./routes/cityRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Routes
app.use('/customers', customerRoutes);
app.use('/cities', cityRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
