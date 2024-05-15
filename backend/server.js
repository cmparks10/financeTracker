const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const db = require('./models');
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the finance tracker application." });
});


require('./routes/auth.routes')(app);
require('./routes/transaction.routes')(app);
require('./routes/user.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
